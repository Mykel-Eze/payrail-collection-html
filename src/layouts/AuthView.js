import "../css/auth.css"
import "../css/modals.css"

import logo from '../images/payrail-logo.svg';

import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from "react-router-dom";
import { useEffect } from 'react';
import $ from "jquery";
import M from "materialize-css"

import DefaultLogin from "../auth-pages/Login-Default";
import RecognisedLogin from "../auth-pages/Login-Recognised";
import EmailSignup from "../auth-pages/Signup-Email";
import PhoneSignup from "../auth-pages/Signup-Phone";
import AgentLogin from "../auth-pages/AgentLogin";
import AgentPassword from "../auth-pages/AgentPasswordRecovery";
import MerchantLogin from "../auth-pages/MerchantLogin";
import MerchantPassword from "../auth-pages/MerchantPasswordRecovery";
import SignupCompleted from "../auth-pages/SignupCompleted";
import FailedAttemptsModal from "../components/modals/FailedAttempts";
import DetectedOldUser from "../components/modals/DetectedOldUser";
import VerifyEmailSignup from "../auth-pages/VerificationWithEmail";
import VerifyPhoneSignup from "../auth-pages/VerificationWithPhone";
import EmailVerified from "../auth-pages/EmailVerified";
import PhoneVerified from "../auth-pages/PhoneVerified";
import VerifyBVN from "../auth-pages/VerifyBVN";
import BvnError from "../components/modals/BvnError";

const AuthView = () => {
    useEffect(() => {
        var Dropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(Dropdown);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

        $("ul#language-list li a").click(function() {
            $(".selected-language").text($(this).text())
        });

    }, []);

    return (
        <Router>
            <div>
                <div id="auth-page-wrapper">
                    <div className="auth-nav-header">
                        <div className="container">
                            <div className="flex-div justify-content-btw">
                                <a href="/" className="logo-side">
                                    <img src={logo} alt="Payrail" className="brand-img" />
                                </a>

                                <div className="nav-right-side flex-div">
                                    <div className="language-block-wrapper">
                                        <button className="dropdown-trigger flex-div" data-target="language-list">
                                            <img src={require('../images/globe-icon.svg').default} alt="globe-icon" className="globe-icon" />
                                            <span className="selected-language">ENG</span>
                                            <img src={require('../images/caret-1.svg').default} alt="caret" className="caret-1" />
                                        </button>

                                        {/* Dropdown Structure */}
                                        <ul id='language-list' className='dropdown-content'>
                                            <li><a href="#!">eng</a></li>
                                            <li><a href="#!">fra</a></li>
                                            <li><a href="#!">yor</a></li>
                                            <li><a href="#!">hau</a></li>
                                            <li><a href="#!">igb</a></li>
                                            <li><a href="#!">chn</a></li>
                                        </ul>
                                    </div>
                                    <div className="create-account-wrapper">
                                        <NavLink to="/signup" className="create-account-btn pry-bg">
                                            <span>Create account</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="auth-wrapper container">
                        <div className="auth-block-wrapper">
                            <div className="">
                                <ul className="form-nav">
                                    <li>
                                        <NavLink to="/agent" className="route-link" activeClassName="active-link">
                                            <span>Agent</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/merchant" className="route-link" activeClassName="active-link">
                                            <span>Merchant</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/login-default" />
                                </Route>
                                <Route exact path="/login-default">
                                    <DefaultLogin />
                                </Route>
                                <Route exact path="/login-recognised">
                                    <RecognisedLogin />
                                </Route>
                                <Route exact path="/email-signup">
                                    <EmailSignup />
                                </Route>
                                <Route exact path="/phone-signup">
                                    <PhoneSignup />
                                </Route>
                                <Route exact path="/signup-complete">
                                    <SignupCompleted />
                                </Route>
                                <Route exact path="/email-verification">
                                    <VerifyEmailSignup />
                                </Route>
                                <Route exact path="/phone-verification">
                                    <VerifyPhoneSignup />
                                </Route>
                                <Route exact path="/email-verify-successful">
                                    <EmailVerified />
                                </Route>
                                <Route exact path="/phone-verify-successful">
                                    <PhoneVerified />
                                </Route>
                                <Route exact path="/verify-bvn">
                                    <VerifyBVN />
                                </Route>

                                <Route exact path="/agent">
                                    <Redirect to="/agent/login" />
                                </Route>
                                <Route exact path="/agent/login">
                                    <AgentLogin />
                                </Route>
                                <Route exact path="/agent/forgot-password">
                                    <AgentPassword />
                                </Route>

                                <Route exact path="/merchant">
                                    <Redirect to="/merchant/login" />
                                </Route>
                                <Route exact path="/merchant/login">
                                    <MerchantLogin />
                                </Route>
                                <Route exact path="/merchant/forgot-password">
                                    <MerchantPassword />
                                </Route>
                            </Switch>
                        </div>
                        <div className="support-and-privacy flex-div justify-content-btw">
                            <div className="contact-side sm-black-txt">
                                Trouble signing in? <a href="/#" className="black-text">Contact support</a>
                            </div>
                            <div className="privacy-terms-side sm-black-txt">
                                <a href="#many-failed-attempts" className="p-link sm-black-txt modal-trigger">Privacy</a>
                                <span className="p-line">|</span>
                                <a href="#detected-olduser-modal" className="p-link sm-black-txt modal-trigger">Terms</a>
                            </div>
                        </div>
                    </section>

                    <section className="sample-links">
                        <NavLink to="/login-default">Login New</NavLink>
                        <NavLink to="/login-recognised">Login Old</NavLink>
                        <NavLink to="/email-signup">Email Signup</NavLink>
                        <NavLink to="/phone-signup">Phone Signup</NavLink>
                        <NavLink to="/agent/login">Agent Login</NavLink>
                        <NavLink to="/agent/forgot-password">Agent Password</NavLink>
                        <NavLink to="/merchant/login">Merchant Login</NavLink>
                        <NavLink to="/merchant/forgot-password">Merchant Password</NavLink>
                        <NavLink to="/signup-complete">Signup Completed</NavLink>
                        <NavLink to="/email-verification">Verification Email</NavLink>
                        <NavLink to="/phone-verification">Verification Phone</NavLink>
                        <NavLink to="/email-verify-successful">Verify Email Successful</NavLink>
                        <NavLink to="/phone-verify-successful">Verify Phone Successful</NavLink>
                        <NavLink to="/verify-bvn">Verify BVN</NavLink>
                    </section>


                    <footer id="auth-footer">
                        <div className="flex-div container">
                            <div className="copyright-div">
                                © Angala Financial Technologies Limited. All Rights Reserved.
                            </div>
                        </div>
                    </footer>
                </div>

                {/* <!-- Modal Section --> */}
                <FailedAttemptsModal />
                <DetectedOldUser />
                <BvnError />

                
                {/* <!-- Modal Section --> */}
                
            </div>
        </Router>
    )
}

export default AuthView;