import { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useProductoContext } from "../context/ProductoContext";
import "../styles/productoGrid.css";
import "../styles/productoCard.css";

const Productos = () => {
    const { productos, cargando, error } = useProductoContext();
    const { agregarCarrito } = useContext(CarritoContext);

    if (cargando) return <p>Estamos cargando tus productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="productos-container">
            <h2 className="titulo">Productos</h2>

            <div className="grid-productos">
                {productos.map((prod) => (
                    <div className="card-producto" key={prod.id}>
                        <img src={prod.imagen} alt={prod.nombre} />

                        <h3>{prod.nombre}</h3>
                        <p>${prod.precio}</p>

                        <button className="btn-agregar"
                            onClick={() => agregarCarrito(prod)}>
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;