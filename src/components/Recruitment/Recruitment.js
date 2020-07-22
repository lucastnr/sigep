import React, { useState } from 'react'
import "../../styles/recruitment.css"

// import {
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks
// } from 'body-scroll-lock'

import ContactOur from "../ContactOur/ContactOur"
import data from "../Slider/SliderData"

export default function Recruitment() {
  const [contact, setContact] = useState(false)

  function toggleContact() {
    setContact(!contact)
  }

  return (
    <>
      <ContactOur
      show={contact}
      data={data[4]}
      toggle={toggleContact}/>

      <div className="recruitment-container">
        <div className="welcome">
          <h1>WELCOME TO</h1>
          <img className="logo" src="/assets/sigep-logo-white.png" alt="SigEp logo" />
          <h2>WE'RE EXCITED THAT YOU ARE INTERESTED
          IN BECOMING PART OF OUR BROTHERHOOD!</h2>
        </div>

        <div className="buttons">
          <button>
            <h1>RECRUITMENT CALENDAR</h1>
          </button>

          <button>
            <h1>RECRUITMENT EVENTS</h1>
          </button>

          <a href="https://danielsetton.typeform.com/to/borRu36g">
            <button>
              <h1>MEMBERSHIP INTEREST</h1>
            </button>
          </a>

          <button onClick={() => toggleContact()}>
            <h1>RECRUITMENT QUESTIONS</h1>
          </button>
        </div>

        <div />
        <div />
      </div>
    </>
  )
}
