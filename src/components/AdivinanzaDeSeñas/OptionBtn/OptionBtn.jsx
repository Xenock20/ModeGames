import "./OptionBtn.css";

export default function OptionBtn({ option, juegoTerminado }) {
  return (
    <div
      className="opt-btn-adivina-game"
      onClick={() =>
        !juegoTerminado
          ? console.log("Juego continua")
          : console.log("Juego Termino")
      }
    >
      <span>{option}</span>
    </div>
  );
}
