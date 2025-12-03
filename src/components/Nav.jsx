import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import ModalCarrito from "./ModalCarrito";
import { useState } from "react";

function Nav() {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <h1 className="logo-site">
                    Talento Tech <span>eCommerce</span>
                </h1>

                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                    <li><Link to="/Admin">Admin</Link></li>
                    <li>
                        <button
                            className="btn-carrito-nav"

                            onClick={() => {
                                setMostrarCarrito(true)
                            }}
                        >
                            🛒 Carrito
                        </button>
                    </li>
                </ul>
            </nav>
            <ModalCarrito
                visible={mostrarCarrito}
                onClose={() => setMostrarCarrito(false)}
            />
        </div>
    );
}

export default Nav;