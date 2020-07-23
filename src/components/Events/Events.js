import React from 'react'
import "../../styles/events.css"

export default function Events({ show, toggle }) {

  let classShow = ""
  if (show) classShow = "show"

  return (
    <div className={"events" + " " + classShow}>
      <img
        className="back"
        src="assets/arrow-left-red.svg"
        alt="Back arrow"
        onClick={() => toggle()} />

      <img className="logo" src="/assets/sigep-logo-red.png" />
    </div>
  )
}