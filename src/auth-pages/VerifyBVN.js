// import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';
import M from "materialize-css"

const VerifyBVN = () => {
    useEffect(()=>{
        document.querySelector("ul.form-nav").style.display = "none";

        var elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);
        var elemsDatepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDatepicker);

        $("#refer-trigger").click(function(){
            $("#refer-wrapper").show();
            $(this).parent().css("visibility", "hidden");
        })
    },[]);

    return (
        <div className="auth-block">
            <div className="auth-greet-title">
                <h1 className="greet-title">
                    <span>Let's get you started</span>
                </h1>
                <p className="greet-desc">
                    Please check your browser's address bar to be sure you're on <br />
                    <a href="https://collection.payrail.co" target="_blank" rel="noopener noreferrer">https://collection.payrail.co</a>
                </p>
            </div>

            <form action="#" id="auth-form">
                <div className="input-row row ald">
                    <div className="input-field">
                        <input id="bvn" type="tel" className="inp-field" />
                        <label htmlFor="bvn">BVN</label>
                    </div>
                    <div className="input-field phone-number-wrapper">
                        <div className="input-field mag-bottom-0">
                            <select  id="countries">
                                <option value="Nigeria">Nigeria (+234)</option>
                                <option value="Ghana">Ghana (+233)</option>
                                <option value="USA">USA (+1)</option>
                            </select>
                            <img src={require("../images/caret-down.svg").default} alt="caret" className="caret-icon" />
                        </div>
                        <div className="input-field mag-top-0">
                            <input id="phone" type="tel" className="inp-field" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="input-field datefield-wrapper">
                        <input id="dob" type="text" className="inp-field datepicker" />
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <div className="alt-link-div">
                        <div className=''>
                            By clicking <b>“Verify”</b>  your agree to Payrail 
                            <a href="/#" className="bold-txt black-txt"> Policy</a> and <a href="/#" className="bold-txt black-txt">Terms </a>  
                        </div>
                    </div>
                </div>

                <div className="submit-btn-wrapper mag-top-0">
                    <button type='button' className="submit-btn pry-btn btn modal-trigger" data-target="bvn-error">Verify</button>
                </div>
            </form>

        </div>
    )
}

export default VerifyBVN;