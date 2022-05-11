import { useEffect, useState } from "react"
import Contador from "./ItemCount"

const productosDeBaseDeDatos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 80
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 90
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 100
  }
]

const Container = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {

      const promesa = new Promise((res, rej) => {
      res(productosDeBaseDeDatos)
    })

      .then((contenido) => {
        console.log("Esta todo OK")
      })
      .catch((error) => {
        console.log("Houston tenemos un problema")
      })


  }, [])

  const onAdd = () => {

  }

  return (
    <>
      <Contador stock={10} init={0} onAdd={onAdd} />
      {/* <ItemList productos={productos}/> */}
      {/* <ul>
        {productos.map((producto)=>{
          //console.log(producto,indice)
          return <li key={producto.id} >{producto.nombre}</li>
        })}
      </ul> */}
    </>
  )
}

export default Container;