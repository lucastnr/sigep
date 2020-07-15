import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import '../../styles/sidebar.css'

const pages =
  [
    { name: "/", label: "Home" },
    { name: "about-us", label: "About SigEp" },
    { name: "executive-board", label: "Executive Board" },
    { name: "recruitment", label: "Recruitment" },
    { name: "bm-scholarship", label: "BM Scholarship" },
    { name: "philanthropies", label: "Philanthropies" },
    { name: "events-mixers", label: "Events & Mixers" }
  ]

const Sidebar = ({ show, toggle }) => {
  let classes = "sidebar"

  if (show) {
    classes = "sidebar open"
  }

  return (
    <div className={classes}>
      <List disablePadding >

        <div className="top-section">
          <div /> {/* empty div */}
          <button className="arrow" onClick={() => toggle()}>
            <img src="assets/arrow-left.svg" alt="Arrow left" />
          </button>
        </div>

        <div className="pages-list">
          {pages.map(({ name, label }) =>
            <a href={name}>
              <ListItem className="side-item" key={name}>
                <h1>{label}</h1>
              </ListItem>
            </a>
          )}
        </div>

      </List>
    </div>
  )
}

export default Sidebar