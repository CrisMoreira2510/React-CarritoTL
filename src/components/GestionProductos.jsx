import { useState, useEffect } from "react";
import FormularioProducto from "./FormularioProducto";
import EditarProducto from "./EditarProducto";

const GestionProductos = () => {

    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(true);

    const API = 'https://68eacd5f76b3362414cc33c7.mockapi.io/Productos';

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch(API);
            const datos = await respuesta.json();
            setProductos(datos);
        } catch (error) {
            console.error("Error al cargar productos:", error);
            alert("Error al cargar los productos");
        } finally {
            setCargando(false);
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(API, {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...producto,
                    precio: Number(producto.precio)
                })
            });

            if (!respuesta.ok) throw new Error("Error al agregar producto");

            const dato = await respuesta.json();
            setProductos([...productos, dato]); // corregido

            alert("Producto agregado correctamente");

        } catch (error) {
            console.error(error.message);
            alert("Hubo un problema al agregar el producto");
        }
    };

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de eliminar?");

        if (!confirmar) return;

        try {
            const respuesta = await fetch(`${API}/${id}`, {
                method: "DELETE",
            });

            if (!respuesta.ok) throw new Error("Error al eliminar");

            setProductos(productos.filter(p => p.id !== id));

        } catch (error) {
            console.error(error);
            alert("Hubo un problema al eliminar");
        }
    };

    if (cargando) return <div>Cargando productos...</div>;

    return (
        <div>
            <h1>Gestión de productos</h1>

            {/* FORM ALTA */}
            <FormularioProducto onAgregar={agregarProducto} />

            {/* LISTADO */}
            {productos.map(producto => (
                <div
                    key={producto.id}
                    onClick={() => setProductoSeleccionado(producto)}
                    style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
                >
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            eliminarProducto(producto.id);
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            ))}

            {/* EDITAR */}
            {productoSeleccionado && (
                <EditarProducto productoSeleccionado={productoSeleccionado} />
            )}
        </div>
    );
};

export default GestionProductos;
