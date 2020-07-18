import React, { useState } from "react"
import "../../styles/main.css"

import Sidebar from "../Sidebar/Sidebar"
import MetaConfig from "../Meta/MetaConfig"

export default function Layout({ pageContent }) {
  const [bar, setBar] = useState(false)

  let mainClass = "background"

  if (bar) mainClass = "background blocked"

  function toggleBar() { setBar(!bar) }

  return (
    <div className={mainClass}>
      <MetaConfig />

      <Sidebar show={bar} toggle={toggleBar} />

      <button className="menu-button" onClick={() => toggleBar()}>
        <img src="../../assets/menu.svg" alt="Menu Button" />
      </button>

      <div id="content">
        {pageContent}
      </div>

    </div >
  )
}