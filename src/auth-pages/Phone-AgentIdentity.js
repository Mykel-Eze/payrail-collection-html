// import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
// import $ from 'jquery';
import M from "materialize-css"

const AgentPhoneIdentity = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "inline-block";

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);
        var elemsDatepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDatepicker);

        document.querySelector("section.auth-wrapper.container").classList.add("identity-page-wrapper");
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
                    <span>Your Idenitity</span>
                </h1>
                <p className="greet-desc">
                    Tell us more about you
                </p>
            </div>

            <form action="/signup-complete" id="auth-form">
                <div className="input-row row ald">
                    <div className="grid-field input-field">
                        <div className="input-field mag-0">
                            <input id="first_name" type="text" className="inp-field" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field mag-0">
                            <input id="last_name" type="text" className="inp-field" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
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
                        </div>
                    </div>
                    <div className="input-field">
                        <input id="username" type="text" className="inp-field" />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" className="inp-field password-field" />
                        <label htmlFor="password">Password</label>
                        <span className="toggle-show-password" onClick={passwordToggle}>Show</span>
                    </div>
                    <div className="alt-link-div">
                        <div className=''>
                            By clicking <b>“Verify”</b>  your agree to Payrail 
                            <a href="/#" className="bold-txt black-txt"> Policy</a> and <a href="/#" className="bold-txt black-txt">Terms </a>  
                        </div>
                    </div>
                </div>

                <div className="submit-btn-wrapper mag-top-0 pidn">
                    <button type='button' className="submit-btn pry-btn btn modal-trigger" data-target="bvn-error">Verify</button>
                </div>
            </form>

        </div>
    )
}

export default AgentPhoneIdentity;