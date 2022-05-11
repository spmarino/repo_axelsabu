import ItemCount from "./ItemCount";


const ItemDetail = ({producto}) => {
const {nombre, precio, description} = producto
  return(<>
  <h3>{nombre}</h3>
  <h3>${precio}</h3>
  <h3>Descripcion: {description}</h3>
  <ItemCount stock={10} init={1} />
  </>)
}

export default ItemDetail;