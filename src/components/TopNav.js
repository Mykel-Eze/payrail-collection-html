import "../css/top-nav.css";

import { NavLink } from "react-router-dom";
import M from "materialize-css";
import { useEffect } from "react";
import $ from "jquery";

const TopNav = () => {
    useEffect(()=> {
        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            coverTrigger: false,
            hover: true,
            constrainWidth: false
        });
    }, []);

    return(
        <nav className="top-nav">
            <div className="flex-div align-content-center justify-content-btw">
                <div id="search-form">
                    <div className="rel search-block flex-div">
                        <img src={require("../images/search.svg").default} alt="icon" className="search-btn-img" />
                        <input id="search" type="search" className="search-input" placeholder="Search Customer, payout, transactions" />
                    </div>
                </div>

                <div className="user-session-wrapper flex-div">
                    <NavLink to="/dashboard/settings" className="topnav-btn hover-scale">
                        <img src={require("../images/settings.svg").default} alt="icon" className="topnav-btn-img tbi-default*" />
                    </NavLink>
                    <NavLink to="/#" className="topnav-btn hover-scale">
                        <img src={require("../images/notification.svg").default} alt="icon" className="topnav-btn-img" />
                    </NavLink>
                    <div className="create-account-wrapper">
                        <NavLink to="/signup" className="create-account-btn pry-bg">
                            <span>MAKE COLLECTION</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;