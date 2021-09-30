import React from "react";
import s from "./Header.module.scss";


export const Header: React.FC = () => {





    return (
        <div className={s.header}>
<div className={s.header__picture}>

</div>
<div className={s.header__title}>
    <span>Little text</span>
    <h1>Main text</h1>
    <p>Some description</p>
    <p>some text <span>white text</span> some text</p>
    <div>
        <button>PAUSE</button>
        <span>Edit pick</span>
    </div>
</div>
        </div>
    )
}
