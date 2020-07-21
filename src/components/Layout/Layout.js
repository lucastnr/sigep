import React, { useState } from "react"
import "../../styles/main.css"

import Sidebar from "../Sidebar/Sidebar"
import MetaConfig from "../Meta/MetaConfig"


export default function Layout( {pageContent} ) {
  const [bar, setBar] = useState(false)
  const [modalState, setModal] = useState(false)

  let mainClass = "background"
  if (bar || modalState) mainClass = "background blocked"

  const toggleBar = () => { setBar(!bar) }
  const toggleModal = () => { setModal(!modalState) }

  return (
    <div className={mainClass}>
      <MetaConfig />

      <Sidebar show={bar} toggle={toggleBar} />

      <button className="menu-button" onClick={() => toggleBar()}>
        <img src="../../assets/menu.svg" alt="Menu Button" />
      </button>

      <div id="content">
        {pageContent(() => toggleModal, modalState)}
      </div>
    </div>
  )
}