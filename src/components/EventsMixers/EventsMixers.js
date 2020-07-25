import React, { useState } from 'react'

import ContactOur from "../ContactOur/ContactOur"
import data from "../Slider/SliderData"
import "../../styles/events-mixers.css"

export default function EventsMixers() {
  const [contact, setContact] = useState(false)

  function toggleModal(set, state) {
    set(!state)
  }

  return (
    <>
      <ContactOur
        show={contact}
        data={data[1]}
        toggle={() => toggleModal(setContact, contact)} />

      <div className="mixers">
        <div className="top">
          <img
            className="logo"
            src="/assets/sigep-logo-red.png"
            alt="Sigep logo" />
          <h1>{"EVENTS & MIXERS"}</h1>
        </div>

        <div className="buttons">
          <button onClick={() => toggleModal(setContact, contact)}>
            <h1>Mixer Scheduling</h1>
          </button>
          <button onClick={() => toggleModal(setContact, contact)}>
            <h1>Event Questions</h1>
          </button>
        </div>
      </div>
    </>
  )
}
