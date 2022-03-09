import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
// import $ from "jquery";
// import M from "materialize-css"

const RecognisedLogin = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "none";
    },[]);

    function passwordToggle(e) {
        var passwordField = e.target.parentElement.querySelector(".password-field");
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }

    return (
        <div className="auth-block">
            <div className="auth-greet-title">
                <h1 className="greet-title">
                    Welcome back, <span>Olamide</span>
                </h1>
                <p className="greet-desc">
                    Please check your browser’s address bar to be sure you’re on <br />
                    <a href="https://collection.payrail.co" target="_blank" rel="noopener noreferrer">https://collection.payrail.co</a>
                </p>
            </div>

            <form action="#" id="auth-form">
                <div className="input-row row">
                    <div className="input-field">
                        <input id="password" type="password" className="inp-field password-field" />
                        <label htmlFor="password">Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                    <div className="alt-link-div flex-div justify-content-btw">
                        <div className=''>
                            <span>Not Olamide? </span> 
                            <NavLink to="/login-default" className="pry-color">
                                <u>Switch Account</u>
                            </NavLink>
                        </div>
                        <NavLink to="/forgot-password" className="pry-color">Forgot password?</NavLink>
                    </div>
                </div>

                <div className="submit-btn-wrapper">
                    <button className="submit-btn pry-btn btn">Sign In</button>
                </div>
            </form>

        </div>
    )
}

export default RecognisedLogin;