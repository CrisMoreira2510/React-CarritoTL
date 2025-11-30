import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const { carrito, vaciarCarrito, eliminarDelCarrito } = useContext(CarritoContext);
  const total = carrito.reduce((acc, prod) => acc + Number(prod.precio), 0);

  return (
    <div className="container my-4">

      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>

      {carrito.length > 0 ? (
        <>
          <div className="list-group mb-4">
            {carrito.map((producto, index) => (
              <div className="list-group-item d-flex justify-content-between align-items-center shadow-sm rounded mb-2" key={index}
              >
                <div>
                  <h5 className="mb-1">{producto.nombre}</h5>
                  <small className="text-muted">${producto.precio}</small>
                </div>

                <button className="btn btn-danger btn-sm"
                  onClick={() => eliminarDelCarrito(index)}>Eliminar</button>

              </div>
            ))}
          </div>


          <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm">
            <h4 className="m-0">Total:</h4>
            <h4 className="m-0 text-success fw-bold">${total}</h4>
          </div>



          <div className="text-end mt-3">
            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
          </div>
        </>
      ) : (
        <div className="alert alert-info text-center">
          El carrito está vacío.
        </div>
      )}

    </div>
  );
}

export default Carrito;