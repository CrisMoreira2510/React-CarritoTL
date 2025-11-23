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
import Admin from './components/Admin';
import Login from './components/Login';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import RutaProtegida from './components/RutaProtegida';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  
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

          <Route path={'/Admin'} element= {
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admin/>
            </RutaProtegida>
            }/>
          <Route path={'/Login'} element= {<Login/>}/>
        </Routes>
        <Productos agregarCarrito={agregarCarrito} />
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />        
        <Footer />                 
      </div>      
    </>
  );
}

export default App;
