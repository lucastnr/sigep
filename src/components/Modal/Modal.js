import React from 'react'
import "../../styles/modal.css"

export default function Modal({ toggle, show, data, modalContent }) {
    let modalClass = "modal"
    if (show) modalClass = "modal show"
    return (
        <div className={modalClass}>
            {modalContent(toggle, data)}
        </div>
    )
}
