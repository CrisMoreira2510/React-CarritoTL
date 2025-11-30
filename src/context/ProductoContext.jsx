import {useState, useEffect, createContext ,useContext } from "react";
import "../styles/FormModal.css";

export const ProductoContext = createContext();

export const ProductosProvider = ({ children }) => {
    const [productos,setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error,setError] = useState(null);

    const API= 'https://68eacd5f76b3362414cc33c7.mockapi.io/Productos';

    useEffect(() =>{
        cargarProductos();
    },[]);

    const cargarProductos = async() => {
        try{
            setCargando(true);
            setError(null);

            const respuesta = await fetch(API);

            if (!respuesta.ok)
                throw new Error(`Error HTTP: ${respuesta.status}`);

            const datos = await respuesta.json();
            setProductos(datos);

        }catch(error){
            console.error("Error al cargar productos: ", error);
            setError(error.message || "Error al cargar los productos");

        }finally{
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
            setProductos([...productos, dato]); 

            alert("Producto agregado correctamente");

        } catch (error) {
            console.error(error.message);
            alert("Hubo un problema al agregar el producto");
        }
    };

    const editarProducto = async (producto) =>{
        try{
            setError(null);

            const respuesta = await fetch (`${API}/${producto.id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(producto),
            });

            if(!respuesta.ok)
                throw new Error(`Error HTTP: ${respuesta.status}`);

            const productoEditado = await respuesta.json();
            setProductos(productos.map(prod =>
                prod.id === productoEditado.id ? productoEditado : prod
            ));

        }catch(error){
            console.error("Error al editar: ", error);
            setError("Hubo un problema al editar el producto");

        }finally{
            setCargando(false);
        }
    };

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de eliminar?");

        if (confirmar){
            try {

                setError(null);

                const respuesta = await fetch(`${API}/${id}`, {
                    method: "DELETE",
                });

                if (!respuesta.ok) 
                    throw new Error("Error al eliminar");

                setProductos(productos.filter(p => p.id !== id));

            } catch (error) {
                console.error(error.message);
                setError("Hubo un problema al eliminar el producto");
            }
        }
    };

    return (
        <ProductoContext.Provider value={{
            productos,
            cargando,
            error,
            cargarProductos,
            editarProducto,
            agregarProducto,
            eliminarProducto
        }}>
            {children}
        </ProductoContext.Provider>
    );
};

export const useProductoContext = () => useContext(ProductoContext);
