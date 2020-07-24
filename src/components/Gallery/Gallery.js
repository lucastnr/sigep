import React, { useState } from 'react'
import "../../styles/gallery.css"

import data from "./PicturesData"
import BottomContent from "../BottomContent/BottomContent"

export default function Gallery({ show, toggle, index }) {
  const [pic, setPic] = useState(0)
  
  function untoggle() {
    setPic(0)
    toggle()
  }

  let gallery = data[index].imgs,
    size = gallery.length,
    leftArrow = "arrow",
    rightArrow = "arrow"

  if (pic == 0) leftArrow += " erase"
  if (pic + 1 === size) rightArrow += " erase"

  function nextImage() {
    if (pic + 1 === size) return
    setPic(pic + 1)
  }

  function prevImage() {
    if (pic === 0) return
    setPic(pic - 1)
  }

  function videoOrImage() {
    if (gallery[0].includes("youtube")) {
      return (
        <iframe
          src={gallery[pic]}
          frameborder="0"
        />
      )
    }

    return (
      <div className="arrow-nav">
        <button
          className={leftArrow}
          onClick={() => prevImage()}>
          <img src="/assets/back-white.svg" />
        </button>
        <img className="picture" src={gallery[pic]} />

        <button
          className={rightArrow}
          onClick={() => nextImage()}
        >
          <img src="/assets/next-white.svg" />
        </button>
      </div>
    )
  }

  let classShow = ""
  if (show) classShow = "show"

  return (
    <div className={"gallery" + " " + classShow}>
      <img
        className="back" src="/assets/arrow-left-white.svg"
        onClick={() => untoggle()} />

      <div className="top">
        <img
          src="/assets/sigep-logo-white.png"
          className="logo" />
        <h1>{data[index].name}</h1>
      </div>
      {videoOrImage()}

      <BottomContent />
      <div
        className="spacer"
      />


    </div>
  )
}