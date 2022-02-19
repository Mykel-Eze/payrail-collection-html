import "../css/auth.css"

import logo from '../images/payrail-logo.svg';

import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useEffect } from 'react';


const AuthView = () => {
    useEffect(() => {
    }, []);

    return (
        <Router>
            <div>
                <div id="auth-page-wrapper">
                    <div className="auth-nav-header">
                        <div className="container">
                            <a href="/login">
                                <img src={logo} alt="Payrail" className="brand-img" />
                            </a>
                        </div>
                    </div>

                    <section className="auth-wrapper container">
                        <div className="auth-block-wrapper">
                            <div className="center">
                                <ul className="form-nav">
                                    <li>
                                        <NavLink to="/signup" className="route-link" activeClassName="active-link">
                                            <span>Sign Up</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" className="route-link" activeClassName="active-link">
                                            <span>Log in</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/signup" />
                                </Route>
                                {/* <Route exact path="/signup">
                                    <EmailSignup />
                                </Route> */}
                            </Switch>
                        </div>
                        <div className="support-and-privacy flex-div justify-content-btw">
                            <div className="contact-side sm-black-txt">
                                Trouble signing in? <a href="/#" className="black-text">Contact support</a>
                            </div>
                            <div className="privacy-terms-side sm-black-txt">
                                <a href="/#" className="p-link sm-black-txt">Privacy</a>
                                <span className="p-line">|</span>
                                <a href="/#" className="p-link sm-black-txt">Terms</a>
                            </div>
                        </div>
                    </section>


                    <footer id="auth-footer">
                        <div className="flex-div container">
                            <div className="trusted-block flex-div">
                                {/* <img src={require("../images/trust.svg").default} alt="shield-icon" className="footer-item-icon" /> */}
                                <span>Trusted by over <span className="pry-color">100k Business</span> like you!</span>
                            </div>

                            <div className="copyright-div">
                                © Angala Financial Technologies Limited. All Rights Reserved.
                            </div>
                        </div>
                    </footer>
                </div>

                {/* <!-- Modal Section --> */}
                <div id="many-failed-attempts" className="modal">
                    <div className="modal-content">
                        <div className="mpodal-content-block">
                            <div className="user-pix-div center mag-bottom-0">
                                {/* <img src={require("../images/secure-lock.svg").default} alt="secure-lock" className="user-pix" /> */}
                            </div>
                            <div className="user-detected-notice center">
                                <h1>Please try again later</h1>
                                <p>
                                    You have been locked out because you signed with wrong details multiple times. 
                                    Please wait for 30 minutes and try again correct details
                                </p>
                            </div>
                            <div className="flex-btn-wrapper flex-div">
                                <button type="button" className="btn pry-btn continue-btn modal-close">Okay</button>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* <!-- Modal Section --> */}
                <div id="detected-olduser-modal" className="modal">
                    <div className="modal-content">
                        <div className="mpodal-content-block">
                            <div className="user-pix-div center">
                                <img src={require("../images/user-pix.png").default} alt="user" className="user-pix" />
                            </div>
                            <div className="user-detected-notice center">
                                <h1>Olamide, we notice you exist within our ecosystem</h1>
                                <p>
                                    Click <b>continue</b> to use the same account details, <b>cancel</b> to create a fresh account.
                                </p>
                            </div>
                            <div className="flex-btn-wrapper flex-div">
                                <button type="button" className="btn pry-btn continue-btn">Continue</button>
                                <button type="button" className="btn cancel-btn modal-close">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default AuthView;