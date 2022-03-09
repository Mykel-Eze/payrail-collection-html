import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';
import M from "materialize-css"

const PhoneSignup = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "none";

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        $("#refer-trigger").click(function(){
            $("#refer-wrapper").show();
            $(this).parent().css("visibility", "hidden");
        })
    },[]);

    return (
        <div className="auth-block">
            <div className="auth-greet-title">
                <h1 className="greet-title">
                    <span>Let's get you started</span>
                </h1>
                <p className="greet-desc">
                    Please check your browser's address bar to be sure you're on <br />
                    <a href="https://collection.payrail.co" target="_blank" rel="noopener noreferrer">https://collection.payrail.co</a>
                </p>
            </div>

            <form action="#" id="auth-form">
                <div className="input-row row">
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
                    <div className="input-field" id='refer-wrapper' hidden>
                        <input id="invite-code" type="text" className="inp-field" />
                        <label htmlFor="invite-code">Invite code</label>
                    </div>
                    <div className="alt-link-div flex-div justify-content-btw">
                        <div className=''>
                            <span>Referred? </span> 
                            <span id='refer-trigger' className="pry-color pointer">
                                <u>Click here</u>
                            </span>
                        </div>
                        <NavLink to="/forgot-password" className="pry-color">Forgot password?</NavLink>
                    </div>
                </div>

                <div className="submit-btn-wrapper">
                    <button className="submit-btn pry-btn btn">Create Account</button>
                </div>
            </form>

        </div>
    )
}

export default PhoneSignup;