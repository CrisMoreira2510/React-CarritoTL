import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <h1 className="logo-site">
                Talento Tech <span>eCommerce</span>
            </h1>

            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
                <li><Link to="/Admin">Admin</Link></li>
            </ul>


        </nav>
    );
}

export default Nav;