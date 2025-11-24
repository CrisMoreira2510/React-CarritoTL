import { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const { agregarCarrito } = useContext(CarritoContext);

    useEffect(() => {
        fetch("https://68eacd5f76b3362414cc33c7.mockapi.io/Productos")
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos);
                setCargando(false);
            })
            .catch(() => {
                setError("Error al cargar tus productos");
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Estamos cargando tus productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Productos</h2>
            {productos.map((prod) => (
                <div key={prod.id}>
                    <p>{prod.nombre} - ${prod.precio}</p>
                    <button onClick={() => agregarCarrito(prod)}>
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Productos;