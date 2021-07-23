import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
  return (
    <nav className="navegacion">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/historial">Historial de redenciones</Link>
        </li>
      </ul>
    </nav>
  )
}
