import { useContext } from "react";
import { CarritoContext } from "./CarritoContext";

const Carrito = ({productosEnCarrito, productosEliminados}) =>{
    const {carrito, eliminarDelCarrito} = useContext (CarritoContext);
    return(
        <div>
            <h2>
                Carrito
            </h2>
            {carrito.map((producto,indice) =>
            <div key={indice}>
            <p> {producto.nombre}:${producto.precio}</p>
            <button onClick={() =>eliminarDelCarrito(indice)}>Eliminar</button>
            </div>
            )}
        </div>
    )
};
export default Carrito;
