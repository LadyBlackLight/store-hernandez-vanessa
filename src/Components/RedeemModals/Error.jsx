import React from 'react';
import './redeem-modals.css';
import sad from '../../assets/icons/sad.svg'

export default function Error(props) {
    const close = () => {
        let modal = document.querySelector(".modal")
        modal.style.display = "none";
    }
    return (
        <div className="modal">
            <div class="modal-error">
            <span class="close" onClick={close}>&times;</span>
            <img src={sad} alt="Sad face" />
                <h2>OOPS!</h2>
                <p className="message">{props.message}</p>
                <button className="btn-m er" onClick={close}>TRY AGAIN</button>
            </div>
        </div>
    )
}
