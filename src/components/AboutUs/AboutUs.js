import React from 'react'

//import "../../../public/styles/about-us.css"

import data from "./topicsData"
import BottomContent from "../BottomContent/BottomContent"
import "../../styles/about-us.css"

export default function AboutUs() {
  return (
    <div className="about-us">
        <img id="logo" src="/assets/sigep-logo-white.png" alt="SigEp Logo" />

        {data.map(({ title, content }) =>
          <div className="topics">
            <div className="title-box">
              <h1>{title}</h1>
            </div>

            <p>{content}</p>

          </div>
        )}
      <div className="spacer" />
      <BottomContent />

    </div>
  )
}
