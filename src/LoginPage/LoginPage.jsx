import  React from 'react'
// import {Link } from 'react-router-dom'
import "./LoginPage.css"

function LoginPage() {
    return (
    <div className="Login">
        <div className="facebook">
            <div className="facebooktext">
                facebook
            </div>
            <div className="title">
                Facebook lets you connect and share <br /> with people your life.
            </div>
        </div>
        <div className="loginContainer">
            <div className="logindetails">
                <input type="email" placeholder='Email address or phone number' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                    
                <button className="btn">
                {/* <Link to="/HeaderArea">LogIn</Link> */}
                Log In
                </button>
                </div>
                <div className="forget">
                    <a href="forget">Forgotten password?</a>
                    <br></br>
                </div>
                <div className="create">
                    <br></br> 
                    <button className="btns">
                        Create New Account
                    </button>
                </div>
                <p></p>
                <br></br>
                <div className="page">
                    <a href="createpage">Create a Page </a> for a celebrity, band or business.
                </div>
            </div>      
        </div>
        )
}

export  default LoginPage;