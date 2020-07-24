import React, { useState } from 'react'
import "../../styles/gallery.css"

import data from "./PicturesData"
import BottomContent from "../BottomContent/BottomContent"

export default function Gallery({ show, toggle, index }) {
  const [pic, setPic] = useState(0)
  
  let gallery = data[index].imgs,
  leftArrow = "arrow",
  rightArrow = "arrow",
  classShow = ""
  
  let galleryClasses = []
  for (let i = 0; i < gallery.length; i++) {
    if (i === pic) galleryClasses.push(" show")
    else galleryClasses.push(" hided")
  }

  if (show) classShow = " show"
  if (pic === 0) leftArrow += " erase"
  if (pic + 1 === gallery.length) rightArrow += " erase"

  function untoggle() {
    toggle()
    setTimeout(() => { setPic(0) }, 200);
  }

  function nextImage() {
    if (pic + 1 === gallery.length) return
    setPic(pic + 1)
  }

  function prevImage() {
    if (pic === 0) return
    setPic(pic - 1)
  }

  function videoOrImage() {
    if (gallery[pic].includes("youtube")) {
      return (
        <iframe
          title={"Video"}
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
          <img
            src="/assets/back-white.svg"
            alt="Back arrow" />
        </button>

        {gallery.map((picture, pos) =>
          <img
            className={"picture" + galleryClasses[pos]}
            src={picture}
            alt={"Picture " + pos}
          />)}

        <button
          className={rightArrow}
          onClick={() => nextImage()}
        >
          <img
            src="/assets/next-white.svg"
            alt="Next arrow" />
        </button>
      </div>
    )
  }

  return (
    <div className={"gallery" + classShow}>
      <button
        onClick={() => untoggle()}>
        <img
          className="back" src="/assets/arrow-left-white.svg"
          alt="Back arrow" />
      </button>

      <div className="top">
        <img
          src="/assets/sigep-logo-white.png"
          className="logo"
          alt="Sigep logo" />

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