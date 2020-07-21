import React from 'react'
import "../../styles/contact-our.css"
import BottomContent from '../BottomContent/BottomContent'

export default function ContactOur(toggle, data) {
  return (
    <div className={"contact"}>
      <img
        className="back"
        src="assets/arrow-left-red.svg"
        alt="Back arrow"
        onClick={toggle()} />

      <div className="top">
        <img className="logo" src="/assets/sigep-logo-red.png" />
        <h1 className="top-text">DON'T HESITATE TO CONTACT OUR {data.role.toUpperCase()}</h1>
      </div>

      <div className="person-info">
        <img src={data.image} className="people-img" alt={data.name} />

        <div className="names">
          <h2 className="title">{data.name}</h2>
          <h3 className="description">{data.role}</h3>
        </div>

        <div className="number">
          <img src="/assets/phone.svg" alt="Phone icon" />
          <h2>{data.phone}</h2>
        </div>

        <div className="text-box">
          <a href={`tel:${data.phone}`}>
            <h2>CLICK HERE TO CALL {data.name.toUpperCase()}</h2>
          </a>
        </div>

      </div>
      
      <div className="spacer" />
      <BottomContent />

    </div>
  )
}
