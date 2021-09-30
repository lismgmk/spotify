import {CommonActionTypeForApp, InferActionType} from "../App/store";
import {dataBase, WidgetType} from "./dataBase/database";


const initialState = {
    widget: dataBase
};

export const MainReduser =
    (state: InitialStateType = initialState, action: CommonActionTypeForApp): InitialStateType => {
        switch (action.type) {
            case "MAIN/LIKE":
                return {
                    ...state,
                    widget: state.widget.map(i => i.id === action.id ? {...i, likes: i.likes + action.item} : i)
                }
            case "MAIN/DIS-LIKE":
                return {
                    ...state,
                    widget: state.widget.map(i => i.id === action.id ? {...i, dislikes: i.disLike + action.item} : i)
                }
            case "MAIN/SUM":
                return {
                    ...state,
                    widget: state.widget.map(i => i.id === action.id ? {...i, sum: i.sum + action.sum} : i)
                }
            default:
                return state;
        }
    };


// actions
export const actionsMainCrypto = {
    setLike: (id: string, item: number) => ({type: "MAIN/LIKE", id, item} as const),
    setDisLike: (id: string, item: number) => ({type: "MAIN/DIS-LIKE", id, item} as const),
    setSum: (id: string, sum: number) => ({type: "MAIN/SUM", id, sum} as const),
}

// types

export type InitialStateType = {
    widget: Array<WidgetType>
}

export type MainActionType = InferActionType<typeof actionsMainCrypto>





