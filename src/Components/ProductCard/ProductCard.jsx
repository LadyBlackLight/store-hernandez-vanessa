import React, { useState } from 'react';
import './product-card.css';
import coin from "../../assets/icons/coin.svg";
import bagBlue from "../../assets/icons/buy-blue.svg";
import bagWhite from "../../assets/icons/buy-white.svg";

export default function ProductCard(props) {
    const [isHover, setIsHover] = useState("no-hover");

    const handleEnter = () => {
        setIsHover(isHover === "no-hover" ? "hover" : "no-hover")
    }
    return (
        <div key={props.nombre} className="product-card" onMouseEnter={handleEnter} onMouseLeave={handleEnter}>
            <div className="principal">
                <img className="product-image" src={props.imagen} alt={props.nombre} />
                <p className="category">{props.categoria}</p>
                <p className="name">{props.nombre}</p>
                {props.points >= props.precio ? <img className="bag" src={bagBlue} alt="Blue Bag" /> : <p className="no-redeem">You need {props.precio - props.points} <img src={coin} alt="coin icon" /></p>}
            </div>
            {props.points >= props.precio ? <div className={`${isHover} is-redeem`}>
                <img className="bag" src={bagWhite} alt="White Bag" />
                <p>{props.precio} <img className="hover-coins" src={coin} alt="coin icon" /></p>
                <button>Redeem Now</button>
            </div> : ""}
        </div>
    )
}
