import '../css/auth.css';
import { useEffect } from 'react';

const SignupCompleted = () => {
    useEffect(() => {
        document.querySelector("ul.form-nav").style.display = "none";
        setTimeout(function(){
            window.location.href = '/';
         }, 5000);
    }, []);

    
    return(
        <div className="auth-block">
            <form id="congrats-form" action="/login">
                <div className="auth-greet-title center">
                    <img src={require("../images/completed.svg").default} alt="congrats" className="congrats-img" />
                    <h1 className="greet-title">
                    Awesome! <br/> Olamide, you are good to go  
                    </h1>
                    <p className="greet-desc">
                        Your account has been created! You can log in to your account now
                    </p>
                </div>
            </form>

        </div>
    )
}

export default SignupCompleted;