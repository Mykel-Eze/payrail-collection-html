// import { useEffect } from 'react';
const BvnError = () => {
    return (
        <div id="bvn-error" className="modal dashboard-modal">
            <div className="modal-content">
                <div className="mpodal-content-block">
                    <div className="user-pix-div center mag-bottom-0">
                        <img src={require("../../images/bvn-lock.svg").default} alt="bvn-lock" className="user-pix" />
                    </div>
                    <div className="user-detected-notice center">
                        <h1 className="modal-title">BVN Validation Error</h1>
                        <p className="modal-desc">
                            We are unable to verify the BVN details you provided
                        </p>
                    </div>
                    <div className="pry-btn-wrapper cta-btn-wrapper">
                        <div className="cta-btn-block">
                            <button type="button" className="btn cancel-btn modal-btn modal-close full-width">Start Over</button>
                        </div>
                        <div className="cta-btn-block">
                            <button type="button" className="btn pry-btn modal-btn modal-close full-width">Try again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BvnError;