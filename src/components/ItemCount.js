import { useState, useEffect } from "react";

const ItemCount = ({ init, stock, onAdd }) => {
  const [contador, setContador] = useState(init);
  const [confirmado, setConfirmado] = useState(false);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const descontarContador = () => {
    setContador(contador - 1);
  };

  const confirmar = () => {
    onAdd(contador);
  };

  if (!confirmado) {
    return (
      <div>
        <p>Unidades : {contador}</p>
        <button onClick={aumentarContador}>+ </button>
        <button onClick={descontarContador}> - </button>
        <button onClick={confirmar}>Confirmar productos</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Unidades : {contador}</p>
        <button onClick={aumentarContador}>+ </button>
        <button onClick={descontarContador}> - </button>
        <button onClick={confirmar}>Confirmar productos</button>
        <p className="modal">Se confirmaron {contador} los productos</p>
      </div>
    );
  }
};

export default ItemCount;
