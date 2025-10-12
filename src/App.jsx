import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';  
import Header from './components/Header';  
import Nav from './components/Nav'
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  
   const[carrito,setCarrito] = useState([]);
    
    const agregarCarrito = (producto)=>{
        setCarrito([...carrito, producto]);
    }
    const vaciarCarrito = () =>{
        setCarrito([]);
    }

  return (
    <>
      <div>
        <Header />  
        <Nav />
        <Routes>
          <Route path={'/'} element= {<Inicio/>}/>
          <Route path={'/Contacto'} element= {<Contacto/>}/>
          <Route path={'/Productos/:id'} element= {<DetalleProducto/>}/>
        </Routes>
        <Productos agregarCarrito={agregarCarrito} />
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />        
        <Footer />                 
      </div>      
    </>
  );
}

export default App;
