import React, { useState } from 'react'
import BottomContent from "../BottomContent/BottomContent"

import "../../styles/executive-board.css"

export default function ExecutiveBoard() {
  const [slide, setSlide] = useState("")

  return (
    <div className="executive-container">
      <img className="logo" src="/assets/sigep-logo-red.png" />

      <h1 className="board-title">2020 - 2021<br />EXECUTIVE BOARD</h1>

      <div className={"mid-container"}>
        <button onClick={() => setSlide("")}>
          <img className="arrow" src="assets/back.svg" />
        </button>

        <div className={"slide-container" + " " + slide}>

          <img src="assets/man.png" className="people-img" />

          <div className="names">
            <h2 className="title">Jeff Tarala</h2>
            <h3 className="description">President</h3>
          </div>

          <div className="number">
            <img src="assets/phone.svg" />
            <h2>219-306-7605</h2>
          </div>

        </div>

        <button onClick={() => setSlide("trs")}>
          <img className="arrow" src="assets/next.svg" />
        </button>
      </div>

      <h1 className="meet-text">USE THE ARROWS TO MEET OUR EXECUTIVE BOARD</h1>

      <div style={{ flex: 0.33 }} />
      <BottomContent />
    </div>
  )
}
