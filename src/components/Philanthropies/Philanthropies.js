import React, { useState } from 'react'

import Gallery from "../Gallery/Gallery"
import ContactOur from "../ContactOur/ContactOur"
import data from "../Slider/SliderData"
import "../../styles/philanthropies.css"

export default function Philanthropies() {
  const [gallery, setGallery] = useState(false)
  const [picIndex, setPics] = useState(0)
  const [contact, setContact] = useState(false)

  function toggleModal(set, state, index) {
    set(!state)
    if (index !== undefined) setPics(index)
  }
  return (
    <>
      <Gallery
        show={gallery}
        toggle={() => toggleModal(setGallery, gallery)}
        index={picIndex}
      />

      <ContactOur
        show={contact}
        data={data[1]}
        toggle={() => toggleModal(setContact, contact)} />

      <div className="phil">
        <div className="top">
          <img
            className="logo"
            src="/assets/sigep-logo-red.png"
            alt="Sigep logo" />
          <h1>PHILANTHROPIES</h1>
        </div>

        <div className="buttons">
          <button onClick={() => toggleModal(setGallery, gallery, 4)}>
            <h1>SigEp-A-Go-Go</h1>
          </button>

          <button onClick={() => toggleModal(setGallery, gallery, 5)}>
            <h1>Patriot's Run</h1>
          </button>

          <button onClick={() => toggleModal(setGallery, gallery, 6)}>
            <h1>SigEp Haunted House</h1>
          </button>

          <button onClick={() => toggleModal(setContact, contact)}>
            <h1>Philanthropy Questions</h1>
          </button>
        </div>
      </div>
    </>
  )
}
