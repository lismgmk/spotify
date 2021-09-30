import React from "react";
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
    const sortWidget = widgets.sort((a, b) => {
        return b.sum - a.sum
    })


    return (
        <table className={s.table__block}>
            <thead>
            <tr>
                <th className={s.col1}/>
                <th className={`${s.col2} ${s.col_opacity}`}>TITLE</th>
                <th className={`${s.col3} ${s.col_opacity}`}>ARTIST</th>
                <th className={`${s.col4} ${s.col_opacity}`}>ALBUM</th>
                <th className={s.col5}><CalendarSvg/></th>
                <th className={s.col6}/>
                <th className={s.col7}/>
            </tr>
            </thead>
            <tbody>
            {sortWidget.map((i) => {
                return <tr key={nanoid()}>
                    <th className={s.col1}><PlusSvg/></th>
                    <th className={s.col2}>{i.title}</th>
                    <th className={s.col3}>{i.artist}</th>
                    <th className={s.col4}>{i.album}</th>
                    <th className={s.col5}><p>{i.date}</p></th>
                    <th className={s.col6}
                        onClick={() => {
                            dispatch(actionsMainCrypto.setLike(i.id, 1))
                            dispatch(actionsMainCrypto.setSum(i.id, 1))
                        }}
                    >
                        <LikeSvg deg={'0'}/>
                    </th>
                    <th className={s.col7}
                        onClick={() => {
                            dispatch(actionsMainCrypto.setDisLike(i.id, 1))
                            dispatch(actionsMainCrypto.setSum(i.id, -1))
                        }}
                    >
                        <LikeSvg deg={'180'}/>
                    </th>
                </tr>
            })
            }
            </tbody>
        </table>
    )
}
