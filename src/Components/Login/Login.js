import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebase'

import './Login.scss'

function Login() {
   const history = useHistory()
   const [ email, setEmail] = useState('')
   const [ password, setPassword ] = useState('')

   //handle functing signIn
    const signIn = e => {
        e.preventDefault() // this stop the refresh

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
              
            })
            .catch((error) => alert(error.message))
    }
    
    //handle function CreateAccount
    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword( email, password )
            .then( (auth) => {
                //it susccesfully create a new user with email and password rediret to homepgas
                if(auth) {
                    history.push('/')
                   
                }
            })
            .catch((error) => alert(error.message))
    }
    
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

                    <input type="text" value={email} onChange={ e => setEmail(e.target.value)} className="login__input"/>

                    <label htmlFor="label" className="login__label">
                        <strong>Password</strong>
                    </label>

                    <input type="password" value={password} onChange={ e => setPassword(e.target.value)}className="login__input"/>

                    <button type="submit" onClick={signIn} className="login__btnSignIn">Sign-In</button>
                   
                    <p className="login__condition">
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className="login__btnNewAccount">Create New Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
