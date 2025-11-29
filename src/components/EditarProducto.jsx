import { useState, useEffect } from "react";

const EditarProducto = ({productoSeleccionado, onActualizar}) => {

    const [producto, setProducto] = useState(productoSeleccionado || {
        nombre: '',
        precio: '',
        descripcion:''
    });

    const API= 'https://68eacd5f76b3362414cc33c7.mockapi.io/Productos';

    useEffect(() => {
        if(productoSeleccionado)
            setProducto(productoSeleccionado);
    }, [productoSeleccionado]);

    const handleChange = (evento) => {
        const {name,value} = evento.target;
        setProducto({...producto,[name]:value});
    };
    
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        try{
            const respuesta = await fetch('${API}/${producto.id}', {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto),
            });

            if(!respuseta.ok) throw new Error("Error al actualizar el producto");

            const datos = await respuesta.json();
            onActualizar(datos);
            alert("Producto actualizado correctamente");
        } catch(error){
            console.error(error.message);
            alert("Hubo un error al actualizar el producto");
        }
    };

    return(
       <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio || ''}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="descripcion"
          value={producto.descripcion || ''}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form> 
    );
}
export default EditarProducto;