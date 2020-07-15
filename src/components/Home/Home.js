import React from 'react'

import "../../styles/home.css"
import BottomContent from "../BottomContent/BottomContent"

export default function Home({ bottom }) {
  return (
    <div id="home-container">

      <div style={{height: 20}}/>
      <div id="welcome-container">
        <h2>WELCOME TO THE HUB OF</h2>
        <img id="logo" src="../../assets/sigep-logo-white.png" alt="SigEp logo" />
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9c/SigEpCrest.png" alt="SigEp logo 2" />
      </div>

      <BottomContent />
    </div>
  )
}
