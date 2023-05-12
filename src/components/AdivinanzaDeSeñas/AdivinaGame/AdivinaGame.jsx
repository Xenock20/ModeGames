import { useEffect, useState } from "react";
import ContOptions from "../ContOptions/ContOptions";
import ImagenAdivinaGame from "../Imagen/ImagenAdivinaGame";

export default function AdivinaGame({ contenido }) {
  const [options, setOptions] = useState([]);
  const [objetoImage, setObjetoImage] = useState({});
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    const listOptionCopy = arrayRevuelto([...contenido[0].options]);
    const objetoImageCopy = contenido[0].img;
    setOptions(
      listOptionCopy.map((option, i) => ({
        index: i,
        name: option,
        clicket: false,
      }))
    );
    setObjetoImage(objetoImageCopy);
  }, []);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  return (
    <div className="cont-advina-game">
      <ImagenAdivinaGame img={objetoImage}></ImagenAdivinaGame>

      <ContOptions
        options={options}
        juegoTerminado={juegoTerminado}
      ></ContOptions>
    </div>
  );
}
