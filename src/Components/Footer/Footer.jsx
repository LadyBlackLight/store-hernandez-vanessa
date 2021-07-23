import React from 'react';
import './footer.css';

export default function Footer() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <p className="text-center"> Vanessa Hernández Maldonado | {year} &copy; Todos los derechos reservados</p>
            </div>
        </footer>
    )
}