import React from 'react';  
import { Link } from 'react-router-dom';

function Nav() {  
    return (  
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li>
                    <Link to={'/'}>Inicio</Link></li>  
                <li>
                    <Link to={'Contacto'}>Contacto</Link></li>
                <li>
                    <Link to={'Admin'}>Admin</Link></li>
                 
            </ul>  
        </nav>  
    );  
}  

export default Nav;