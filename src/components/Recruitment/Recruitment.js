import React from 'react'
import "../../styles/recruitment.css"
import "../../components/BottomContent/BottomContent"
import BottomContent from '../../components/BottomContent/BottomContent'

export default function Recruitment() {
    return (
        <div className="recruitment-container">
            <div className="welcome">
                <h1>WELCOME TO</h1>
                <img className="logo" src="/assets/sigep-logo-white.png" alt="SigEp logo" />
                <h2>WE'RE EXCITED THAT YOU ARE INTERESTED
                    IN BECOMING PART OF OUR BROTHERHOOD!</h2>
            </div>

            <div className="buttons">
                <button>
                    <h1>RECRUITMENT CALENDAR</h1>
                </button>

                <button>
                    <h1>RECRUITMENT EVENTS</h1>
                </button>

                <button>
                    <h1>MEMBERSHIP INTEREST</h1>
                </button>

                <button>
                    <h1>RECRUITMENT QUESTIONS</h1>
                </button>
            </div>

            <BottomContent />
        </div>
    )
}
