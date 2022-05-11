import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productosIniciales from "./Productos.json";

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 500);
    });
    pedido.then((res) => {
      setProducto(res.find((product) => product.id == id));
      setCargando(false);
    });
  }, [id]);

  if (cargando) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <ItemDetail producto={producto} />
      </>
    );
  }
};

export default ItemDetailContainer;
