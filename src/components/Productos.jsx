import { useEffect, useState } from "react";
import Inicio from "./Inicio";

const Productos = ({agregarCarrito}) => {
    const[producto,setProducto] = useState([]);
    const[cargando,setCargando] = useState(true);
    const [error, setError] = useState (null);

    useEffect(() => {
        fetch('https://68eacd5f76b3362414cc33c7.mockapi.io/Productos')
        .then(respuesta => respuesta.json())
        .then (datos => {
            setProducto(datos);
            setCargando(false);
        })
        .catch(error => {
            setError('Error al cargar tus productos')
            setCargando(false);                   
        })
    },[]);

    if(cargando)
        return <p>Estamos cargando tus productos...</p>
    
    if(error)
        return <p>{error}</p>

return <Inicio productos={producto} agregarCarrito={agregarCarrito} />;
    
}

export default Productos;
