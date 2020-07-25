import React from 'react'

import data from "./FaqContent"
import BottomContent from "../BottomContent/BottomContent"
import "../../styles/faq.css"

export default function Faq({ show, toggle }) {

  let classShow = ""
  if (show) classShow = " show"

  return (
    <div className={"faq" + classShow}>
      <button
        onClick={() => toggle()}>
        <img
          className="back" src="/assets/arrow-left-white.svg"
          alt="Back arrow" />
      </button>

      <div className="top">
        <img className="logo"
        src="/assets/sigep-logo-white.png"
        alt="Sigep logo" />

        <div className="balanced">
          <img
          src="/assets/sigep-balanced.png"
          alt="The Balanced Man badge" />
          <h1>BALANCED MAN SCHOLARSHIP | FAQ</h1>
        </div>
      </div>


      <div className="topics">
        {data.map((topic) =>
          <div className="topic">
            <h1 className="title">{topic.name}</h1>
            <p>{topic.content}</p>
          </div>
        )}
      </div>

      <a 
      className="apply"
      href="https://forms.gle/CS3qDgTgEjXnWGqp7">
          <h1>APPLY NOW</h1>
      </a>

      <BottomContent />

      </div>
  )
}
