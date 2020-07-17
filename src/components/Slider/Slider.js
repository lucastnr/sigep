import React from "react"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "../../styles/slider.css"

import board from "./SliderData"

export default function Slider({ pos, arrow }) {

  if (arrow == "r") {
    board[pos - 1].position = "hide"
    board[pos].position = "show"
  }

  else if (arrow == "l") {
    board[pos + 1].position = "hide"
    board[pos].position = "show"
  }

  return (
    <div className={"slide-container"}>

      {board.map(({ name, role, phone, position, image }, index) =>
        <div className={`people ${position}`}>
          <img src={image} className="people-img" />

          <div className="names">
            <h2 className="title">{name}</h2>
            <h3 className="description">{role}</h3>
          </div>

          <div className="number">
            <img src="assets/phone.svg" />
            <h2>{phone}</h2>
          </div>
        </div>
      )}

    </div>
  )
}