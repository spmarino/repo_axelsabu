import { useNavigate } from "react-router-dom";

const Item = ({producto}) => {
  
    const navigate = useNavigate()
  
    const handleClick = () => {
      navigate(`/producto/${producto.id}`)
    }
  
    return (
      <article className="card">
        <h3>{producto.nombre}</h3>
        <img src="https://via.placeholder.com/300x300" alt="card"/>
        <p>Precio : ${producto.precio}</p>
        
        <button onClick={handleClick}>Explora más !!</button>
      </article>
    )
  }
  export default Item;