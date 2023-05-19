import React from 'react'

export default function OptionBtnError({ option, juegoTerminado, handleClick }) {
  return (
    <div
      className={`opt-btn-error-game ${
        option.clicket ? !option.result
          ? "opt-btn-error-game-false"
          : "opt-btn-error-game-true"
          : ""
      }`}
      onClick={() =>
        !juegoTerminado ? handleClick(option) : console.log("Juego Termino")
      }
    >
      <span>{option.url}</span>
    </div>
  )
}
