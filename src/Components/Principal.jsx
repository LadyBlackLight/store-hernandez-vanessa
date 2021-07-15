import React from 'react';
import { Route } from "react-router-dom";
import History from './Filters/History/History';

export default function Principal() {
    return (
        <div>
            <Route exact path="/historial">
                <History />
            </Route>
        </div>
    )
}
