import React, { useState, useEffect } from "react";

import { NavLink} from 'react-router-dom';

import '../css/auth.css';
// import $ from 'jquery';
import OtpInput from 'react-otp-input';

const VerifyEmailSignup = () => {
    useEffect(() => {}, []);

    const [otp, setOTP] = useState('')
    
    return(
        <div className="auth-block">
            <form id="verification-form">
                <div className="auth-greet-title">
                    <h1 className="greet-title">
                        Enter the verification code
                    </h1>
                    <p className="greet-email-desc">
                       mideola@gmail.com. <NavLink to="/email-signup"><u>Wrong email?</u></NavLink>
                    </p>
                </div>
                <div className="input-row row">
                    <div id="verification-codes">
                        <OtpInput
                            value={otp}
                            onChange={(val)=>{
                                setOTP(val)
                            }}
                            numInputs={6}
                            separator={<span> </span>}
                        />
                    </div>
                    <div className="input-error-txt">Verification error or Invalid Code.</div>
                </div>

                <div className="submit-btn-wrapper justify-content-btw">
                    <div className="txt-link-side">
                        Didn't get OTP?
                        <button type="button" className="txt-btn pry-color"><u>Resend</u></button>
                    </div>
                    <div className="btn-side">
                        <button className="submit-btn pointer modal-trigger">Verify</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VerifyEmailSignup;