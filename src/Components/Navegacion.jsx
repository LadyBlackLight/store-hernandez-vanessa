import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
    return (
        <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/historial">Historial</Link>
      </li>
    </ul>
    )
}
