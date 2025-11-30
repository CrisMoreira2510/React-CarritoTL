import { useState, useEffect } from "react";
import FormularioProducto from "./FormularioProducto";
import EditarProducto from "./EditarProducto";
import { useProductoContext } from "../context/ProductoContext";


const GestionProductos = () => {

    const {productos, agregarProducto, editarProducto ,eliminarProducto} = useProductoContext();

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
       <div>
    <h1>Gestión de productos</h1>

    <button
      onClick={() => {
        setModoForm("agregar");
        setProductoSeleccionado(null);
        setMostrarForm(true);
      }}
    >
      Agregar producto
    </button>

    {productos.map((producto) => (
      <div
        key={producto.id}
        style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => abrirFormEditar(producto)}
      >
        <h3>{producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
        <img
            src={producto.imagen}
             alt={producto.nombre}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />


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
    );
};

export default GestionProductos;
