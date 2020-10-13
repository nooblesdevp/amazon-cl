const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HbjlYLy5Fhj8R9Mg84Xx3gbAj8TG2KqThqlCeDEMIECUxWoxmDv08zMY6RBuNdTj44V480tjf8MuQaPHQACeJkJ00U1fEo3cs"
);

// API

//App Config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello yoo"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request recieved! BOOM!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //submit of the currency
    currency: "usd",
  });
  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);
