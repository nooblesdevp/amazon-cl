import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.scss'

function Login() {
   



    return (
        <div className="login">
            <div className="login__container">
                <Link to="/">
                    <img 
                        className="login__logo" 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                        alt=""/>
                
                </Link>  
                {/* from login */}
                <form className="login__form" action="">
                    <h2 className="login__heading">Sign-In</h2>
                    <label htmlFor="label" className="login__label">
                        <strong>Email or mobile phone number</strong>
                    </label>
                    <input type="text" className="login__input"/>
                    <label htmlFor="label" className="login__label">
                        <strong>Password</strong>
                    </label>
                    <input type="password" className="login__input"/>
                    <button className="login__btnSignIn">Sign-In</button>
                    <p className="login__condition">
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className="login__btnNewAccount">Create New Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
