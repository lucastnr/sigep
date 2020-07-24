import React from 'react'

import BottomContent from "../BottomContent/BottomContent"
import "../../styles/calendar.css"

export default function Calendar({ show, toggle }) {

  let classShow = ""
  if (show) classShow = "show"

  return (
    <div className={"calendar" + " " + classShow}>
      <img
        className="back"
        src="assets/arrow-left.svg"
        alt="Back arrow"
        onClick={() => toggle()} />

      <img className="logo" src="/assets/sigep-logo-red.png" />

      <div className="mid">
        <h1>RECRUITMENT CALENDAR <div>COMING SOON</div></h1>
        <img src="/assets/under-construction.png" />
      </div>

      <div style={{flex: 0.1}}/>
      <BottomContent />

    </div>
  )
}
