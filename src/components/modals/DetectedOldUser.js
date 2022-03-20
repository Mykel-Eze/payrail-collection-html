// import { NavLink } from 'react-router-dom';
import UserPix from '../../images/user-pix.png';

const DetectedOldUser = () => {
    return (
        <div id="detected-olduser-modal" className="modal dashboard-modal">
            <div className="modal-content">
                <div className="mpodal-content-block">
                    <div className="user-pix-div center">
                        <img src={UserPix} alt="user" className="user-pix" />
                    </div>
                    <div className="user-detected-notice center">
                        <h1 className="modal-title">Olamide, we notice you exist within our ecosystem</h1>
                        <p className="modal-desc">
                            Click <b>continue</b> to use the same account details, <b>cancel</b> to create a fresh account.
                        </p>
                    </div>
                    <div className="flex-btn-wrapper flex-div">
                        <button className="btn pry-btn continue-btn modal-btn flex-div">
                            <span>Continue</span> <span className='right-arr'>&rsaquo;</span>
                        </button>
                        <button className="btn cancel-btn modal-btn modal-close">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetectedOldUser;