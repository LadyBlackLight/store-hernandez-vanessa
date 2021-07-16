import React from 'react';
import './redeem-modals.css';
import happy from '../../assets/icons/happy.svg'

export default function Success(props) {
    const close = () => {
        let modal = document.querySelector(".modal")
        modal.style.display = "none";
    }
    return (
        <div className="modal">
            <div className="modal-success">
                <span className="close" onClick={close}>&times;</span>
                <img src={happy} alt="Happy face" />
                <h2>SUCCESS!</h2>
                <p className="message">{props.message}</p>
                <button className="btn-m su" onClick={close}>CONTINUE</button>
            </div>
        </div>
    )
}
