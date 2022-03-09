import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';

const EmailSignup = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "none";

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
                    <div className="input-field">
                        <input id="email" type="email" className="inp-field" />
                        <label htmlFor="email">Email Address</label>
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

export default EmailSignup;