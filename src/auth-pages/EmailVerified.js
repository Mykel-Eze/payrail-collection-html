import '../css/auth.css';
import { useEffect } from 'react';

const EmailVerified = () => {
    useEffect(() => {
        document.querySelector("ul.form-nav").style.display = "none";
        setTimeout(function(){
            window.location.href = '/';
         }, 3000);
    }, []);

    
    return(
        <div className="auth-block">
            <form id="congrats-form" action="/login">
                <div className="auth-greet-title center">
                    <img src={require("../images/email.svg").default} alt="congrats" className="congrats-img" />
                    <h1 className="greet-title">Email Verified</h1>
                    <p className="greet-desc">
                        Please continue your registration
                    </p>
                </div>
            </form>

        </div>
    )
}

export default EmailVerified;