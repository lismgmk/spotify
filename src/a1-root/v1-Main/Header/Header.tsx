import React from "react";
import s from "./Header.module.scss";
import {ThreeDotsSvg} from "../../../assets/icon/ThreeDotsSVG";
import {Button} from "../../common/Button/Button";
import img from '../../../assets/image/photo.png';


export const Header: React.FC = () => {

    return (
        <div className={s.header}>
            <div className={s.picture}>
                <img src={img} alt={'Album'}/>
            </div>
            <div className={s.title}>
                <span>Little text</span>
                <h1>Main text</h1>
                <p>Some description</p>
                <div className={s.title_block}>
                    <p>some text </p>
                    <span>{`white text`}</span>
                    <p> some text</p>
                </div>
                <div className={s.block}>
                    <div className={s.block_button}>
                        <Button color={'green'} rounded width={90}>PAUSE</Button>
                    </div>
                    <ThreeDotsSvg/>
                </div>

            </div>
        </div>
    )
}
