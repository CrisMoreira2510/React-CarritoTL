import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://68eacd5f76b3362414cc33c7.mockapi.io/Productos/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div>
      <Link to="/">Volver al inicio</Link>
      <h1>{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "300px" }} />
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default DetalleProducto;
