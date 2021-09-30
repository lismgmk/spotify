import React from "react";
import s from "./svgStyle.module.scss"



export const CalendarSvg: React.FC = () => {
    return <div className={s.icon}>
        <svg
             version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 32 32"
             fill={'white'}
        >
            <path d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z"/>
        </svg>
    </div>

}
