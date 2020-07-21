import React, { useState } from 'react'
import "../../styles/recruitment.css"
import "../../components/BottomContent/BottomContent"

import BottomContent from '../../components/BottomContent/BottomContent'
import Modal from '../Modal/Modal'
import ContactOur from "../ContactOur/ContactOur"
import data from "../Slider/SliderData"

export default function Recruitment(toggleModal, modalState) {
  var modal = ContactOur

  function changingModal(func, toggle) {
    modal = func
    return toggle()
  }

  return (
    <>
      <Modal
        toggle={toggleModal}
        show={modalState}
        data={data[4]}
        modalContent={modal} />

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

          <button onClick={changingModal(BottomContent, toggleModal)}>
            <h1>RECRUITMENT EVENTS</h1>
          </button>

          <a href="https://danielsetton.typeform.com/to/borRu36g">
            <button>
              <h1>MEMBERSHIP INTEREST</h1>
            </button>
          </a>

          <button>
            <h1>RECRUITMENT QUESTIONS</h1>
          </button>
        </div>

        <BottomContent />
      </div>
    </>
  )
}
