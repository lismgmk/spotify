import React from "react";
import s from "./Header.module.scss";
import {ThreeDotsSvg} from "../../../assets/icon/ThreeDotsSVG";
import {Button} from "../../common/Button/Button";
import img from '../../../assets/image/photo.png';



export const Header: React.FC = () => {

    return (
        <div className={s.header}>
            <div className={s.header__picture}>
                <img src={img} />
            </div>
            <div className={s.header__title}>
                <span>Little text</span>
                <h1>Main text</h1>
                <p>Some description</p>
                <p>some text <span>white text</span> some text</p>
                <div className={s.header__title__block}>
                    <Button color={'green'} rounded width={90}>PAUSE</Button>
                    <span>Edit pick</span>
                </div>
                <ThreeDotsSvg/>
            </div>
        </div>
    )
}
