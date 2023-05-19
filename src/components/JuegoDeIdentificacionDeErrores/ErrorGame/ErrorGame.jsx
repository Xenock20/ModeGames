import { useEffect, useState } from "react";
import ConetOptionsErro from "../ContOptions/ConetOptionsError"; 

export default function ErrorGame({contenido}) {
  const [optionsImg, setOptionsImg] = useState([]);
  const [frase, setFrase] = useState({});
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    const listOptionCopy = contenido[0].options;
    const fraseCopy = contenido[0].frase;
    setOptionsImg(
      listOptionCopy.map((option, i) => ({
        index: i,
        url: option,
        clicket: false,
        result: null,
      }))
    );
    setFrase(fraseCopy);
  }, []);

  const handleClick = (option) => {
    console.log(option);
  };

  return (
    <div className="cont-error-game">
      <ConetOptionsErro
        options={optionsImg}
        juegoTerminado={juegoTerminado}
        handleClick={handleClick}
      ></ConetOptionsErro>
    </div>
  );
}
