import React from 'react'

import "../../styles/home.css"
import BottomContent from "../BottomContent/BottomContent"

export default function Home(toggleModal, modalState) {
  return (
    <>
      <div className="home">
        <div className="spacer"/>
        <div className="welcome">
          <h2>WELCOME TO THE HUB OF</h2>
          <img className="logo" src="/assets/sigep-logo-white.png" alt="SigEp logo" />
          <img className="badge" src="https://upload.wikimedia.org/wikipedia/en/9/9c/SigEpCrest.png" alt="SigEp logo 2" />
        </div>

        <BottomContent />
      </div>
    </>
  )
}
