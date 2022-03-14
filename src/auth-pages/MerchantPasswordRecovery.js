// import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
// import $ from "jquery";
// import M from "materialize-css"

const MerchantPassword = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "inline-block";
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
                    Create new password, <span>Olamide</span>
                </h1>
                <p className="greet-desc">
                    Please check your browser’s address bar to be sure you’re on <br />
                    <a href="https://collection.payrail.co" target="_blank" rel="noopener noreferrer">https://collection.payrail.co</a>
                </p>
            </div>

            <form action="#" id="auth-form">
                <div className="input-row row">
                    <div className="input-field">
                        <input id="business-name" type="text" className="inp-field" />
                        <label htmlFor="business-name">Business Name</label>
                    </div>

                    <div className="gap-height"></div>

                    <div className="input-field">
                        <input id="old-password" type="password" className="inp-field password-field" />
                        <label htmlFor="old-password">Old Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                    <div className="input-field">
                        <input id="new-password" type="password" className="inp-field password-field" />
                        <label htmlFor="new-password">New Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                    <div className="input-field">
                        <input id="confirm-password" type="password" className="inp-field password-field" />
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                </div>

                <div className="submit-btn-wrapper">
                    <button className="submit-btn pry-btn btn">Create new password</button>
                </div>
            </form>

        </div>
    )
}

export default MerchantPassword;