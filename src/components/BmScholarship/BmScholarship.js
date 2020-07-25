import React, { useState } from 'react'

import Faq from "../Faq/Faq"
import ContactOur from "../ContactOur/ContactOur"
import data from "../Slider/SliderData"
import "../../styles/bm-scholarship.css"

export default function BmScholarship() {
  const [faq, setFaq] = useState(false)
  const [contact, setContact] = useState(false)

  function toggleModal(set, state) {
    set(!state)
  }

  return (
    <>
      <Faq
        show={faq}
        toggle={() => toggleModal(setFaq, faq)} />

      <ContactOur
        show={contact}
        data={data[1]}
        toggle={() => toggleModal(setContact, contact)} />

      <div className="bm">
        <div className="top">
          <img className="logo"
            src="/assets/sigep-logo-red.png"
            alt="Sigep logo" />
          <h1>PRESENTS THE</h1>

          <div className="balanced">
            <img src="/assets/sigep-balanced.png" alt="The Balanced Man badge" />
            <h1>BALANCED MAN SCHOLARSHIP</h1>
          </div>
        </div>

        <div className="buttons">
          <a href="https://forms.gle/CS3qDgTgEjXnWGqp7">
            <button className="primary">
              <h1>APPLY NOW</h1>
            </button>
          </a>

          <button
            className="secundary"
            onClick={() => toggleModal(setFaq, faq)}>
            <h1>BMS | FAQ</h1>
          </button>

          <button
            className="secundary"
            onClick={() => toggleModal(setContact, contact)}>
            <h1>CONTACT US</h1>
          </button>
        </div>

        <div className="spacer" />

      </div>
    </>
  )
}
