import React, { useState} from 'react';
import './product-card.css';
import coin from "../../assets/icons/coin.svg";
import bagBlue from "../../assets/icons/buy-blue.svg";
import bagWhite from "../../assets/icons/buy-white.svg";

import Success from '../RedeemModals/Success';
import Error from '../RedeemModals/Error';

export default function ProductCard(props) {
    const [isHover, setIsHover] = useState("no-hover");
    const [redeem, setRedeem] = useState("");
    const [error, setError] = useState();
    const [message, setMessage] = useState("");

    const handleEnter = () => {
        setIsHover(isHover === "no-hover" ? "hover" : "no-hover")
    }
    const handleRedeem = (redeem) => {
        setRedeem(redeem);
        console.log("Redeem", redeem);
        const headers = {
            "Content-type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
        };
        const body = {
            productId: redeem
        };
        let peticion = fetch("https://coding-challenge-api.aerolab.co/redeem", { method: "POST", body: JSON.stringify(body), headers });
        peticion
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((data) => {
                console.log("API de Redeem", data);
                setError(false)
                setMessage(data.message)
            })
            .catch((err) => {
                setError(true)
                setMessage(err.message)
            });
    }
    return (
        <>
            {error === true ? <Error message={message} /> : ""}
            {error === false ? <Success message={message} /> : ""}
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
                    <button onClick={(e) => handleRedeem(e.target.value)} value={props.id}>Redeem Now</button>
                </div> : ""}
            </div>
        </>
    )
}
