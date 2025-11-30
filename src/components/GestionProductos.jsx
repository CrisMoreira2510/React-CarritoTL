import { useState, useEffect } from "react";
import FormularioProducto from "./FormularioProducto";
import EditarProducto from "./EditarProducto";
import { useProductoContext } from "../context/ProductoContext";


const GestionProductos = () => {

    const { productos, agregarProducto, editarProducto, eliminarProducto } = useProductoContext();

    const [mostrarForm, setMostrarForm] = useState(false);
    const [modoForm, setModoForm] = useState("agregar");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const abrirFormAgregar = () => {
        setModoForm("agregar");
        setProductoSeleccionado(null);
        setMostrarForm(true);
    };

    const abrirFormEditar = (producto) => {
        setModoForm("editar");
        setProductoSeleccionado(producto);
        setMostrarForm(true);
    };

    const cerrarForm = () => {
        setMostrarForm(false);
    };
    console.log("mostrarForm:", mostrarForm);

    return (
        <div className="productos-container">
            <h2 className="titulo">Gestión de Productos</h2>

            <div className="grid-productos">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setModoForm("agregar");
                        setProductoSeleccionado(null);
                        setMostrarForm(true);
                    }}
                >
                    Agregar producto
                </button>
            </div>

            <div className="grid-productos">

                {productos.map((producto) => (
                    <div className="card-producto" key={producto.id}>

                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p className="precio">${producto.precio}</p>
                        <div className="mt-auto d-flex gap-2 justify-content-end">
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={() => abrirFormEditar(producto)}
                            >
                                ✏ Editar
                            </button>

                            <button className="btn btn-danger btn-sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    eliminarProducto(producto.id);
                                }}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>


                ))}


                {mostrarForm && (
                    <div className="modal-overlay" onClick={cerrarForm}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={cerrarForm}>✕</button>

                            {modoForm === "agregar" && (
                                <FormularioProducto
                                    onAgregar={agregarProducto}
                                    onCerrar={cerrarForm}
                                />
                            )}

                            {modoForm === "editar" && (
                                <EditarProducto
                                    productoSeleccionado={productoSeleccionado}
                                    onEditar={editarProducto}
                                    onCerrar={cerrarForm}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
       
    );
};

export default GestionProductos;
