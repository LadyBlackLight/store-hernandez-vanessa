import React, { useState, useContext } from 'react'
import './widgetcoins.css';
import { AppContext } from '../../AppContext/AppContext';
import coin from '../../../assets/icons/coin.svg'
import AddCoins from '../AddCoins/AddCoins';

export default function Widgetcoins() {
    const {points, setPoints} = useContext(AppContext);
    const {user, setUser} = useContext(AppContext);
    const [modal, setModal] = useState("hide");
    const [addPoints, setAddPoints] = useState(0)

    const handleModal = () => {
        setModal(modal === "hide" ? "show" : "hide")
    }
    const handleCoins = (addPoints) => {
        console.log("Add Points",addPoints)
        setAddPoints(addPoints)
            if (addPoints > 0) {
                const headers = {
                    "Content-type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
                };
                const body = {
                    amount: addPoints
                };
                let peticion = fetch("https://coding-challenge-api.aerolab.co/user/points", { method: "POST", body: JSON.stringify(body), headers });
                peticion
                    .then((respuesta) => {
                        return respuesta.json();
                    })
                    .then((data) => {
                        console.log("API de Points", data['New Points'])
                        setPoints(data['New Points'])
                    });
            }
    }

    return (
        <div className="widget-coins">
            <h3>{user}</h3>
            <div className="coins">
                <p>{points}</p>
                <img src={coin} alt="Coin icon" />
            </div>
            <div className="add-coins">
                <button className="add" onClick={handleModal}>+</button>
                <AddCoins modal={modal} handleCoins={handleCoins} />
            </div>
        </div>
    )
}
