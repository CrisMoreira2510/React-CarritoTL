import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/ModalCarrito.css";

function ModalCarrito({ visible, onClose }) {

    const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);
    const total = carrito.reduce((acc, prod) => acc + Number(prod.precio), 0);

    if (!visible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="modal-close" onClick={onClose}>✕</button>

                <h2>🛒 Carrito</h2>

                {carrito.length > 0 ? (
                    <>
                        <ul className="modal-list">
                            {carrito.map((prod, index) => (
                                <li key={index} className="modal-item">
                                    <span>{prod.nombre}</span>
                                    <span>${prod.precio}</span>

                                    <button 
                                        className="btn-eliminar"
                                        onClick={() => eliminarDelCarrito(index)}
                                    >
                                         🗑
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="modal-total">
                            <strong>Total:</strong> ${total}
                        </div>

                        <button className="btn-vaciar" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                    </>
                ) : (
                    <p className="carrito-vacio">El carrito está vacío.</p>
                )}

            </div>
        </div>
    );
}

export default ModalCarrito;
