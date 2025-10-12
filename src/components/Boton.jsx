import { useState } from "react";

const Boton =() =>{
   const[contador,setContador] = useState(0); 

    return(
        <>
        <h3>{contador}</h3>
        <button onClick={()=> setContador(contador+1)}>Boton</button>
        </>
    );
};

export default Boton;