import React, { createContext, useState } from 'react';
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }

    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice != indiceAEliminar));
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CarritoContext.Provider
            value={
                {
                    carrito,
                    agregarCarrito,
                    eliminarDelCarrito,
                    vaciarCarrito
                }}>
            {children}
        </CarritoContext.Provider>
    );
}