import "../css/auth.css"

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

const AuthView = () => {
    useEffect(() => {
        var Dropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(Dropdown);

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

                                <Route exact path="/agent">
                                    <Redirect to="/agent/login" />
                                </Route>
                                <Route exact path="/agent/login">
                                    <AgentLogin />
                                </Route>
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

                    <section className="sample-links">
                        <NavLink to="/login-default">Login New</NavLink>
                        <NavLink to="/login-recognised">Login Old</NavLink>
                        <NavLink to="/email-signup">Email Signup</NavLink>
                        <NavLink to="/phone-signup">Phone Signup</NavLink>
                        <NavLink to="/agent/login">Agent Login</NavLink>
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
                <div id="many-failed-attempts" className="modal">
                    <div className="modal-content">
                        <div className="mpodal-content-block">
                            <div className="user-pix-div center mag-bottom-0">
                                <img src={require("../images/lock-closed.svg").default} alt="secure-lock" className="user-pix" />
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