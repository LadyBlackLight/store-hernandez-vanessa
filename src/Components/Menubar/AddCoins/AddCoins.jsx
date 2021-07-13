import React from 'react';
import './add-coins.css';

export default function AddCoins(props) {
    return (
        <div className={`${props.modal}`}>
            <div className="arrow"></div>
            <div className="modal-content">
                <h4>Agrega más puntos a tu cuenta</h4>
               <button onClick={()=> props.handleCoins(1000)} className="add-points" value="1000">1000</button>
               <button onClick={()=> props.handleCoins(5000)} className="add-points" value="5000">5000</button>
               <button onClick={()=> props.handleCoins(7500)} className="add-points" value="7500">7500</button>
            </div>
        </div>
    )
}
