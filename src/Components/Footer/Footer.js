import { AttachMoney, Flag, Language } from "@material-ui/icons";
import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <button className="footer__btnToTop">
          <a href="#header"> Back to top</a>
        </button>
        <div className="footer__links">
          <div className="footer__link">
            <h3>Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Sustainability</li>
              <li>Investor Relations</li>
              <li>Amazon devices</li>
              <li>amazon tours</li>
            </ul>
          </div>
          <div className="footer__link">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>See More Make Money with Us</li>
            </ul>
          </div>
          <div className="footer__link">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>Amazon Bussiness Card</li>
              <li>Shop with Points</li>
              <li>Shop with Point</li>
              <li>Amazon Currencu Converter</li>
            </ul>
          </div>
          <div className="footer__link">
            <h3>Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Return & Replacements</li>
            </ul>
          </div>
        </div>
        <div className="footer__location">
          <img
            className="footer__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <div className="footer__btnLocation">
            <button>
              <Language className="footer__icon" /> English
            </button>
            <button>
              <AttachMoney className="footer__icon" /> USD - U.S Dollar
            </button>
            <button>
              <Flag className="footer__icon" /> United States
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
