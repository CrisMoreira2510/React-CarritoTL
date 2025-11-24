import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
 const { carrito, vaciarCarrito } = useContext(CarritoContext);
    
  return (
     <div>
      <h2>Carrito</h2>

      {carrito.length > 0 ? (
        <>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio}
              </li>
            ))}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};
export default Carrito;