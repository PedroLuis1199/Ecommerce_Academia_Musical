
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([])


  //Effect para no perder la informacion del carrito al recargar la pagina
  useEffect(()=>{
      const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
      setCarrito(carritoLS)
  }, [])


  //Effect para guadar la info del carrito
  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))

  }, [carrito])

  const agregarCarrito = (producto) =>{
  
    //Evitar duplicados en el carrito
      if(carrito.some((articulo) => articulo.id === producto.id)){ 

        const carritoActualizado = carrito.map((articulo) =>{

          if(articulo.id === producto.id){
              articulo.cantidad = producto.cantidad
          }
          return articulo;

        });
        setCarrito(carritoActualizado)

      }else{
        setCarrito([...carrito, producto])//Asigna una copia de carrito a producto
      }


  }


  //Funcion para actualizar la cantidad del producto cuando ya esta agregado al carrito
  const actualizarCantidad = (producto) =>{
    const carritoActualizado = carrito.map((articulo) =>{

      if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad
      }
      return articulo;

    });
    setCarrito(carritoActualizado)
  }

  const eliminarProducto= id =>{
    const carritoActualizado = carrito.filter((articulo)=>articulo.id !== id)

    setCarrito(carritoActualizado)
  }

  return <Component {...pageProps}
  
  carrito = {carrito}
  agregarCarrito = {agregarCarrito}
  actualizarCantidad = {actualizarCantidad}
  eliminarProducto = {eliminarProducto}
  />
}

export default MyApp
