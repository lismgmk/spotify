import React from 'react'
import {TableList} from "./TableList/TableList";
import {Header} from "./Header/Header";
import {SearchSvg} from "../../assets/icon/SearchSVG";
import s from "./Main.module.scss";

const Main = () => {

    return (
        <div className={s.container}>
            <Header/>
            <div className={`${s.filter} ${s.wrapper}`}>
                <SearchSvg/>
                <p>Filter</p>
            </div>
            <TableList/>
        </div>
    )
}

export default Main
