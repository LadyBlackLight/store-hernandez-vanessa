import React, { useContext } from 'react';
import './history.css'
import { AppContext } from '../../../AppContext/AppContext';

export default function History() {
    const { history } = useContext(AppContext);

    return (
        <div className="history">
            <div className="container">
                <h3 className="title">Historial de redenciones</h3>
                <div className="redeemContainer">
                    {history.map((historial) => {
                        return <div key={historial.createDate} className="redeemProduct">
                            <h3>{historial.name}</h3>
                            <p>Date: {historial.createDate}</p>
                            <p>Cost: {historial.cost}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
