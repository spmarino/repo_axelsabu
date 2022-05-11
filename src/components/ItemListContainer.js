import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosIniciales from "./Productos.json";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    const pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 500);
    });

    pedido.then((res) => {
      setCargando(false);
      if (!nombreCategoria) {
        setProductos(res);
      } else {
        setProductos(
          res.filter((products) => products.categorias == nombreCategoria)
        );
      }

      toast.dismiss();
      toast.success("Carga finalizada!");
    });
  }, [nombreCategoria]);

  if (cargando) {
    return <BeatLoader />;
  } else {
    return <ItemList productos={productos} />;
  }
};

export default ItemListContainer;
