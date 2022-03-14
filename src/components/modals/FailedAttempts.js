// import { useEffect } from 'react';
const FailedAttemptsModal = () => {

    countdown();

    var interval;
    function countdown() {
        clearInterval(interval);
        interval = setInterval( function() {
            var timer = document.querySelector("#countdown-tag").innerHTML;
            timer = timer.split(':');
            var minutes = timer[0];
            var seconds = timer[1];
            seconds -= 1;
            if (minutes < 0) return;
            else if (seconds < 0 && minutes !== 0) {
                minutes -= 1;
                seconds = 59;
            }
            else if (seconds < 10) seconds = '0' + seconds;

            document.querySelector("#countdown-tag").innerHTML = minutes + ':' + seconds;

            if (minutes === 0 && seconds === 0) clearInterval(interval);
        }, 1000);
    }

    return (
        <div id="many-failed-attempts" className="modal dashboard-modal">
            <div className="modal-content">
                <div className="mpodal-content-block">
                    <div className="user-pix-div center mag-bottom-0">
                        <img src={require("../../images/lock-closed.svg").default} alt="secure-lock" className="user-pix" />
                    </div>
                    <div className="user-detected-notice center">
                        <h1 className="modal-title">Please try again later</h1>
                        <p className="modal-desc">
                            You are locked out because you signed in multiple times with the wrong details. Please try again 
                            in <b className="pry-color" id="countdown-tag">30:00</b> with your correct details.
                        </p>
                    </div>
                    <div className="pry-btn-wrapper flex-div">
                        <button type="button" className="btn pry-btn modal-btn modal-close">Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FailedAttemptsModal;