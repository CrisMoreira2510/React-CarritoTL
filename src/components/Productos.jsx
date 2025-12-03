import { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useProductoContext } from "../context/ProductoContext";
import "../styles/productoGrid.css";
import "../styles/productoCard.css";
import { Helmet } from "react-helmet";

const Productos = () => {
    const { productos, cargando, error } = useProductoContext();
    const { agregarCarrito } = useContext(CarritoContext);

    if (cargando) return <p>Estamos cargando tus productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (

        <div className="productos-container">
            <Helmet>
                <title>Talento Tech eCommerce – Productos</title>
                <meta
                    name="description"
                    content="Listado de productos disponibles para comprar en el eCommerce de Talento Tech."
                />
            </Helmet>



            <div className="grid-productos" role="list">
                {productos.map((prod) => (
                    <div className="card-producto" key={prod.id} role="listitem">
                        <img src={prod.imagen} alt={prod.nombre} />

                        <h3>{prod.nombre}</h3>
                        <p>${prod.precio}</p>

                        <button className="btn-agregar"
                            onClick={() => agregarCarrito(prod)}
                            aria-label={`Agregar ${prod.nombre} al carrito`}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;