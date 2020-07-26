import React, { useState } from 'react'
import Slider from "../Slider/Slider"

import board from "../Slider/SliderData"

import "../../styles/executive-board.css"

export default function ExecutiveBoard() {
  const [slide, setSlide] = useState({ pos: 0, arrow: "" })

  let leftArrow = "arrow-button",
    rightArrow = "arrow-button"
  if (slide.pos === 0) leftArrow += " erase"
  if (slide.pos === board.length - 1) rightArrow += " erase"

  function increase() {
    if (slide.pos + 1 === board.length) return
    setSlide({ pos: slide.pos + 1, arrow: "r" })
  }

  function decrease() {
    if (slide.pos === 0) return
    setSlide({ pos: slide.pos - 1, arrow: "l" })
  }

  return (
    <div className="executive-container">

      <div className="first spacer" /> {/*Empty div*/}

      <div className="top">
        <img className="logo" src="/assets/sigep-logo-red.png" alt="SigEp Logo" />
        <h1 className="board-title">2020 - 2021<br />EXECUTIVE BOARD</h1>
      </div>

      <div className={"arrow-container"}>
        <button className={leftArrow} onClick={() => decrease()}>
          <img className="arrow" src="/assets/back.svg" alt="Left arrow" />
        </button>

        <Slider pos={slide.pos} arrow={slide.arrow} />

        <button className={rightArrow} onClick={() => increase()}>
          <img className="arrow" src="/assets/next-black.svg" alt="Right arrow" />
        </button>
      </div>

      <h1 className="meet-text">USE THE ARROWS TO MEET OUR EXECUTIVE BOARD</h1>

      <div className="second spacer" /> {/*Empty div*/}

    </div>
  )
}
