import React, { useState } from 'react'
import BottomContent from "../BottomContent/BottomContent"
import Slider from "../Slider/Slider"

import board from "../Slider/SliderData"

import "../../styles/executive-board.css"

function classLeft (index) {
  if (index == 0) {
    return "arrow-button erase"
  }
  else return "arrow-button"
}

function classRight (index, total) {
  if (index == total - 1) {
    return "arrow-button erase"
  }
  else return "arrow-button"
}

export default function ExecutiveBoard() {
  const [slide, setSlide] = useState({pos: 0, arrow: ""})

  function increase() {
    if (slide.pos + 1 == board.length) {
      return
    }
    setSlide({pos: slide.pos + 1, arrow: "r"})
  }

  function decrease() {
    if (slide.pos == 0) {
      return
    }
    setSlide({pos: slide.pos - 1, arrow: "l"})
  }

  return (
    <div className="executive-container">
      <img className="logo" src="/assets/sigep-logo-red.png" />

      <h1 className="board-title">2020 - 2021<br />EXECUTIVE BOARD</h1>

      <div className={"arrow-container"}>
        <button className={classLeft(slide.pos)} onClick={() => decrease()}>
          <img className="arrow" src="/assets/back.svg" />
        </button>

        <Slider pos={slide.pos} arrow={slide.arrow}/>

        <button className={classRight(slide.pos, board.length)} onClick={() => increase()}>
          <img className="arrow" src="/assets/next.svg" />
        </button>
      </div>

      <h1 className="meet-text">USE THE ARROWS TO MEET OUR EXECUTIVE BOARD</h1>
      
      <BottomContent />
    </div>
  )
}
