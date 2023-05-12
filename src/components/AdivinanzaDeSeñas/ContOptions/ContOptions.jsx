import OptionBtn from "../OptionBtn/OptionBtn";

export default function ContOptions({ options, juegoTerminado }) {
  return (
    <div className="opts-adivina-game">
      {options.map((option) => (
        <OptionBtn
          key={option.index}
          option={option.name}
          juegoTerminado={juegoTerminado}
        ></OptionBtn>
      ))}
    </div>
  );
}
