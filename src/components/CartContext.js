import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto


const MiCustomProvider = ({children}) => {

  const [carrito,setCarrito] = useState([])
  const [cantidad_total,setCantidad_total] = useState(0)
  const [precio_total,setPrecio_total] = useState(0)

  const agregarProducto = (producto,cantidad) => {
   
  }

  const eliminarProducto = (id) => {
    
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const estaEnCarrito = (producto) => {

  }

  const valorDelContexto = {
    cantidad_total ,
    precio_total ,
    carrito ,
    agregarProducto ,
    eliminarProducto , 
    vaciarCarrito ,
    estaEnCarrito
  }

  return (
    <Provider value={valorDelContexto} >
      {children}
    </Provider>
  )
}

export default MiCustomProvider;