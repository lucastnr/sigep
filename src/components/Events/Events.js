import React, { useState } from 'react'
import "../../styles/events.css"

import Gallery from "../Gallery/Gallery"
import data from '../Gallery/PicturesData'

export default function Events({ show, toggle }) {
  const [gallery, setGallery] = useState(false)
  const [picIndex, setPics] = useState(0)

  let classShow = ""
  if (show) classShow = "show"

  function toggleModal(set, state, index) {
    set(!state)
    if (index != undefined) setPics(index)
  }

  return (
    <>
      <Gallery
        show={gallery}
        toggle={() => toggleModal(setGallery, gallery)}
        index={picIndex}
      />

      <div className={"events" + " " + classShow}>
        <img
          className="back"
          src="assets/arrow-left-red.svg"
          alt="Back arrow"
          onClick={() => toggle()} />

        <div className="top">
          <img className="logo" src="/assets/sigep-logo-red.png" />
          <h1>RECRUITMENT EVENTS</h1>
        </div>

        <div className="buttons">
          <button onClick={() => toggleModal(setGallery, gallery, 0)}>
            <h1>Cookouts</h1>
          </button>

          <button onClick={() => toggleModal(setGallery, gallery, 1)}>
            <h1>Dante's Inferno</h1>
          </button>

          <button onClick={() => toggleModal(setGallery, gallery, 2)}>
            <h1>Intramurals</h1>
          </button>

          <button  onClick={() => toggleModal(setGallery, gallery, 3)}>
            <h1>BMS Banquet</h1>
          </button>
        </div>

        <div style={{ flex: 0.33 }} />
      </div>
    </>
  )
}