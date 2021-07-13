import React from 'react';
import './menubar.css';
import logo from '../../assets/aerolab-logo.svg';

import Widgetcoins from './Widgetcoins/Widgetcoins';

export default function Menubar() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="Logo de la tienda" />
                <Widgetcoins/>
            </div>
        </header>
    )
}
