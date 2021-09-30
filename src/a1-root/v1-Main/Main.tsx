import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {WidgetType} from "../../Redusers/dataBase/database";
import {TableList} from "./TableList/TableList";
import {Header} from "./Header/Header";
import {SearchSvg} from "../../assets/icon/SearchSVG";
// import s from "./Main.module.scss";

const Main = () => {

    const widgets = useSelector<AppRootStateType, Array<WidgetType>>(state => state.main.widget)


    return (
        <div>

            <Header/>
            <SearchSvg/>
            <div>
                Filter
            </div>
            <TableList/>
        </div>
    )
}

export default Main
