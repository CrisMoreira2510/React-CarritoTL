import { useState } from "react";

const Carrito = ({ carrito, vaciarCarrito }) => {
    
  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((producto, index) => (
          <p key={index}>
            {producto.nombre}: ${producto.precio}
          </p>
        ))
      )}
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
}
export default Carrito;