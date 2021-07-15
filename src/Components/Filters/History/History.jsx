import React, { useContext} from 'react';
import { AppContext } from '../../AppContext/AppContext';

export default function History() {
    const { history } = useContext(AppContext);

    return (
        <div className="history">
            <div className="container">
                {history.map((historial) => {
                    return <div key={historial.createDate}>
                        <h3>{historial.name}</h3>
                        <p>{historial.createDate}</p>
                        <p>{historial.cost}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
