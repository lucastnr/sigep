import React, { useState } from 'react'
import "../../styles/recruitment.css"

// import {
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks
// } from 'body-scroll-lock'

import data from "../Slider/SliderData"

import ContactOur from "../ContactOur/ContactOur"
import Calendar from '../Calendar/Calendar'
import Events from '../Events/Events'

export default function Recruitment() {
  const [contact, setContact] = useState(false)
  const [calendar, setCalendar] = useState(false)
  const [events, setEvents] = useState(false)

  function toggleModal(set, state) {
    set(!state)
  }

  return (
    <>
      <ContactOur
        show={contact}
        data={data[4]}
        toggle={() => toggleModal(setContact, contact)} />

      <Calendar
        show={calendar}
        toggle={() => toggleModal(setCalendar, calendar)} />

      <Events
        show={events}
        toggle={() => toggleModal(setEvents, events)} />

      <div className="recruitment-container">
        <div className="welcome">
          <h1>WELCOME TO</h1>
          <img className="logo" src="/assets/sigep-logo-white.png" alt="SigEp logo" />
          <h2>WE'RE EXCITED THAT YOU ARE INTERESTED
          IN BECOMING PART OF OUR BROTHERHOOD!</h2>
        </div>

        <div className="buttons">
          <button onClick={() => toggleModal(setCalendar, calendar)}>
            <h1>RECRUITMENT CALENDAR</h1>
          </button>

          <button onClick={() => toggleModal(setEvents, events)}>
            <h1>RECRUITMENT EVENTS</h1>
          </button>

          <a href="https://danielsetton.typeform.com/to/borRu36g">
            <button>
              <h1>MEMBERSHIP INTEREST</h1>
            </button>
          </a>

          <button onClick={() => toggleModal(setContact, contact)}>
            <h1>RECRUITMENT QUESTIONS</h1>
          </button>
        </div>

        <div />
        <div />
      </div>
    </>
  )
}
