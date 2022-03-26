import { NavLink } from "react-router-dom";
// import $ from 'jquery'
import M from 'materialize-css';

const GettingStarted = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            coverTrigger: false
        });
    });

    // const CopyToClipboard = (selectedId) => {
    //     /* Get the text field */
    //     var copyText = document.getElementById(selectedId);
      
    //     /* Select the text field */
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
    //     /* Copy the text inside the text field */
    //     navigator.clipboard.writeText(copyText.value);
        
    //     /* Alert the copied text */
    //     M.toast({html: 'API key copied'})
    // }
    
    return ( 
        <div className="page-content-wrapper">
            <div className="container">
                <div className="greeting-wrapper">
                    <h2 className="greet-user flex-div">
                        <span>Hello! Agent Olamide </span>
                        <img src={require("../../images/waving-hand.svg").default} alt="waving hand" className="waving-hand" />
                    </h2>
                    <span>Welcome to Payrail Collector. Let’s get your account up and running  </span>
                </div>


                <div className="pending-actions-wrapper">
                    <div className="pending-action-block">
                        <div className="center">
                            <img src={require("../../images/pending-upload.svg").default} alt="pending-icon" className="pending-img" />
                            <p className="pending-description">
                                Complete your KYC verification
                            </p>
                            <div className="pending-btn-wrapper">
                                <NavLink to="/dashboard/pending-tasks" className="pending-btn pry-btn">
                                    Complete KYC <span className="right-arr">&rsaquo;</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="pending-action-block">
                        <div className="center">
                            <img src={require("../../images/pending-tour.svg").default} alt="pending-icon" className="pending-img" />
                            <p className="pending-description">
                                Know to your dashboard
                            </p>
                            <div className="pending-btn-wrapper">
                                <button className="pending-btn pry-btn">
                                    Take a Tour <span className="right-arr">&rsaquo;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pending-action-block">
                        <div className="center">
                            <img src={require("../../images/pending-chat.svg").default} alt="pending-icon" className="pending-img" />
                            <p className="pending-description">
                                Get answers to questions 
                            </p>
                            <div className="pending-btn-wrapper">
                                <button className="pending-btn pry-btn">
                                    Go to Support <span className="right-arr">&rsaquo;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default GettingStarted;