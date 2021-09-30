import React, {useState} from "react";
import s from "./TableList.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../App/store";
import {nanoid} from "nanoid";
import {WidgetType} from "../../../Redusers/dataBase/database";
import {actionsMainCrypto} from "../../../Redusers/MainReduser";
import {LikeSvg} from "../../../assets/icon/LikeSVG";
import {CalendarSvg} from "../../../assets/icon/CalendarSVG";
import {PlusSvg} from "../../../assets/icon/PlusSVG";



export const TableList: React.FC = () => {



    const dispatch = useDispatch();

    const widgets = useSelector<AppRootStateType, Array<WidgetType>>(state => state.main.widget)

    const sortWidget = widgets.sort((a,b)=>{
        return  b.sum - a.sum
    })

    return (
        <div className={s.table}>
            <table className={s.table__block}>
                <thead>
                <tr>
                    <th className={s.col1}></th>
                    <th className={s.col2}><p>TITLE</p></th>
                    <th className={s.col3}><p>ARTIST</p></th>
                    <th className={s.col4}><p>ALBUM</p></th>
                    <th className={s.col5 }><CalendarSvg/></th>
                    <th className={s.col6}><p>LIKE</p></th>
                    <th className={s.col7}><p>DISLIKE</p></th>
                </tr>
                </thead>
                <tbody>
                {sortWidget.map((i) => {
                    return <tr key={nanoid()}>
                        <th className={s.col1}><PlusSvg/></th>
                        <th className={s.col2}>{i.title}</th>
                        <th className={s.col3}>{i.artist}</th>
                        <th className={s.col4}>{i.album}</th>
                        <th className={s.col5}>{i.date}</th>
                        <th className={s.col6}>
                            <div
                                onClick={() => {
                                    dispatch(actionsMainCrypto.setLike(i.id, 1))
                                    dispatch(actionsMainCrypto.setSum(i.id, 1))
                                }}
                            >
                            <LikeSvg deg={'0'}/>
                            </div>
                        </th> <th className={s.col7}>
                            <div
                                onClick={() => {
                                    dispatch(actionsMainCrypto.setLike(i.id, 1))
                                    dispatch(actionsMainCrypto.setSum(i.id, -1))
                                }}
                            >
                            <LikeSvg deg={'180'}/>


                            </div>
                        </th>



                    </tr>
                })
                }
                </tbody>
            </table>
        </div>
    )
}
