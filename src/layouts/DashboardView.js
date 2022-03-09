import "../css/auth.css"

import logo from '../images/payrail-logo.svg';

// import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useEffect } from 'react';


const DashboardView = () => {
    useEffect(() => {
    }, []);

    return (
        <div>
            <div id="dashboard-page-wrapper">
                <div className="auth-nav-header">
                    <div className="container">
                        <a href="/login">
                            <img src={logo} alt="Payrail" className="brand-img" />
                        </a>
                    </div>
                </div>

                <h1 className="center">
                    DashboardView
                </h1>
            </div>
        </div>
    )
}

export default DashboardView;