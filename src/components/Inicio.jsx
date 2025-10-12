import React from 'react';  
import {Link} from "react-router-dom";


function Inicio({ productos = [], agregarCarrito }) {  
  
    return (  

       <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {productos.map((prod) => (
        <div
          key={prod.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Link to={`/productos/${prod.id}`}>
          <img
            src={prod.imagen || "https://via.placeholder.com/150"}
            alt={prod.nombre}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3>{prod.nombre}</h3>
          </Link>
          <p>${prod.precio}</p>
          <button onClick={() => agregarCarrito(prod)}>Agregar</button>
        </div>
      ))}
    </section> 
    );  
}  

export default Inicio;