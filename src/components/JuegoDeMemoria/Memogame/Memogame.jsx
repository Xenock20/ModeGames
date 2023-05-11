import Tabla from "../Tabla/Tabla";
import { useState, useEffect } from "react";

export default function Memogame({ contenido }) {
  const [contenidoRevueltoDeLaTabla, setContenidoRevueltoDeLaTabla] = useState(
    []
  );
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState(null);
  const [animacion, setAnimacion] = useState(false);

  useEffect(() => {
    const listaContenidoRevuelto = arrayRevuelto([...contenido, ...contenido]);
    setContenidoRevueltoDeLaTabla(
      listaContenidoRevuelto.map((item, i) => ({
        index: i,
        item: item.item,
        name: item.name,
        flipped: false,
      }))
    );
  }, []);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleClick = (blocke) => {
    const blockeDadoVuelta = { ...blocke, flipped: true };
    let contenidoRevueltoDeLaTablaCopia = [...contenidoRevueltoDeLaTabla];
    contenidoRevueltoDeLaTablaCopia.splice(blocke.index, 1, blockeDadoVuelta);
    setContenidoRevueltoDeLaTabla(contenidoRevueltoDeLaTablaCopia);
    if (bloqueSeleccionado === null) {
      setBloqueSeleccionado(blocke);
    } else if (bloqueSeleccionado.name === blocke.name) {
      setBloqueSeleccionado(null);
    } else {
      setAnimacion(true);
      setTimeout(() => {
        contenidoRevueltoDeLaTablaCopia.splice(blocke.index, 1, blocke);
        contenidoRevueltoDeLaTablaCopia.splice(
          bloqueSeleccionado.index,
          1,
          bloqueSeleccionado
        );
        setContenidoRevueltoDeLaTabla(contenidoRevueltoDeLaTablaCopia);
        setBloqueSeleccionado(null);
        setAnimacion(false);
      }, 1000);
    }
  };

  return (
    <Tabla
      blockes={contenidoRevueltoDeLaTabla}
      animacion={animacion}
      handleClick={handleClick}
    />
  );
}
