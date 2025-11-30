import { useState, useEffect } from "react";

function EditarProducto({ productoSeleccionado, onEditar, onCerrar }) {

  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: ""
  });

  useEffect(() => {
    if (productoSeleccionado) {
      setProducto(productoSeleccionado);
    }
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!producto.nombre.trim() || !producto.precio || !producto.descripcion.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    onEditar(producto);
    onCerrar();
  };

  if (!productoSeleccionado) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <h2>Editar Producto</h2>

        <form onSubmit={handleSubmit}>
          
          <label>Nombre:</label>
          <input 
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
            required
          />

          <label>Precio:</label>
          <input 
            type="number"
            name="precio"
            min="0"
            value={producto.precio}
            onChange={handleChange}
            required
          />

          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
            required
          />

          <label>URL Imagen:</label>
          <input
            type="text"
            name="imagen"
            value={producto.imagen}
            placeholder="https://ejemplo.com/img.jpg"
            onChange={handleChange}
          />

          
          {producto.imagen && (
            <img 
              src={producto.imagen} 
              alt="preview"
              className="img-preview"
            />
          )}

          <div className="modal-buttons">
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onCerrar}>Cancelar</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditarProducto;