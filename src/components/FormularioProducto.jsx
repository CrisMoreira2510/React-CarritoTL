import React, { useState } from "react";

function FormularioProducto({ onAgregar, onCerrar }) {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: ""   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !producto.nombre.trim() ||
      !producto.precio ||
      !producto.descripcion.trim()
    ) {
      alert("Todos los campos salvo la imagen son obligatorios.");
      return;
    }

    onAgregar(producto);
    setProducto({ nombre: "", precio: "", descripcion: "", imagen: "" });
    onCerrar();
  };

  return (
    <form className="d-flex flex-column gap-3"
     onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Nombre:</label>
        <input className="form-control"
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Precio:</label>
        <input className="form-control"
          type="number"
          name="precio"
          value={producto.precio}
          min="0"
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Descripción:</label>
        <textarea className="form-control"
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>URL Imagen:</label>
        <input className="form-control"
          type="text"
          name="imagen"
          placeholder=""
          value={producto.imagen}
          onChange={handleChange}
        />
      </div>

      <div className="modal-buttons">
         <button type="submit">Guardar</button>
          <button type="button" onClick={onCerrar}>
        Cancelar
          </button>
      </div>
    </form>
  );
}

export default FormularioProducto;