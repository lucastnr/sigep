import React, { useState} from "react"
import "../../styles/main.css"

import Sidebar from "../Sidebar/Sidebar"

export default function Layout({ pageContent }) {
  const [bar, setBar] = useState(false)

  let mainClass = "background"

  if (bar) mainClass = "background blocked"

  function toggleBar() { setBar(!bar) }

  return (
    <div className={mainClass}>
      
      <Sidebar show={bar} toggle={toggleBar}/>
      <div className="menu-button">
        <button onClick={() => toggleBar()}>
          <img src="../../assets/menu.svg" alt="Menu Button" />
        </button>
      </div>

      <div id="content">
        {pageContent}
      </div>

    </div >
  )
}