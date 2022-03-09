import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import $ from "jquery";
import M from "materialize-css"

const DefaultLogin = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "none";

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        $("#phone-login-trigger").click(function(){
            $("#phone-login").slideDown();
            $("#email-login").slideUp();
        });
        $("#email-login-trigger").click(function(){
            $("#email-login").slideDown();
            $("#phone-login").slideUp();
        })
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
                    Welcome back
                </h1>
                <p className="greet-desc">
                    Please check your browser’s address bar to be sure you’re on <br />
                    <a href="https://collection.payrail.co" target="_blank" rel="noopener noreferrer">https://collection.payrail.co</a>
                </p>
            </div>

            <form action="#" id="auth-form">
                <div className="input-row row" id="email-login">
                    <div className="input-field">
                        <input id="email" type="text" className="inp-field" />
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="inp-field password-field" />
                        <label htmlFor="password">Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                    <div className="alt-link-div flex-div justify-content-btw">
                        <button type="button" className="txt-btn pry-color" id="phone-login-trigger"><u>Login with phone number</u></button>
                        <NavLink to="/forgot-password" className="pry-color">Forgot password?</NavLink>
                    </div>
                </div>

                <div className="input-row row" id="phone-login">
                    <div className="input-field phone-number-wrapper">
                        <div className="input-field mag-bottom-0">
                            <select  id="countries">
                                <option value="Nigeria">Nigeria (+234)</option>
                                <option value="Ghana">Ghana (+233)</option>
                                <option value="USA">USA (+1)</option>
                            </select>
                            <img src={require("../images/caret-down.svg").default} alt="caret" className="caret-icon" />
                        </div>
                        <div className="input-field mag-top-0">
                            <input id="phone" type="tel" className="inp-field" placeholder="Phone Number" />
                            {/* <label htmlFor="phone">Phone Number</label> */}
                        </div>
                    </div>
                    <div className="input-field">
                        <input id="password-2" type="password" className="inp-field password-field" />
                        <label htmlFor="password-2">Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                    <div className="alt-link-div flex-div justify-content-btw">
                        <button type="button" className="txt-btn pry-color" id="email-login-trigger"><u>Login with Email</u></button>
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

export default DefaultLogin;