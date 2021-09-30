import {combineReducers, createStore} from "redux";
import {MainActionType, MainReduser} from "../Redusers/MainReduser";


const rootReducer = combineReducers({
    main: MainReduser
})
export const store = createStore(rootReducer);


export type CommonActionTypeForApp =
    | MainActionType

export type AppRootStateType = ReturnType<typeof rootReducer>
export type InferActionType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;



