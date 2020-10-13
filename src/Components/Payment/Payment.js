import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// component
import "./Payment.scss";
import CheckoutPoduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer/reducer";
import axios from "../axios/axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientsSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currencies submits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientsSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  // handleSubmit
  const handleSubmit = async (e) => {
    //do all the fancy stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replaceState("/orders");
      });
  };

  //handleChange Card
  const handleChange = (e) => {
    //listen for change in the CardElement
    // and display any error as the costumer type ther card info
    setDisabled(e.empty);
    setError(e.error ? e.error.messge : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( {<Link to="/checkout">{basket?.length} Items </Link>} )
        </h1>
        <div className="payment__section">
          {/* payment section delivery address */}
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* peyment section preview product */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutPoduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(e) => <h3> Order Total: {e} </h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
