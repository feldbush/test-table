import { UserDataType } from "../../../types/UserDataType";
import { FiltersType, TableActionsType } from "./tableReducer";

export const setDataAC = (data : Array<UserDataType>)  => {
    return {type: TableActionsType.SET_DATA, payload: data }
}  

export const setFilter = (filterType : FiltersType) => {
    return {type: TableActionsType.SET_FILTER, payload: filterType}
}

export const resetFilter = () => {
    return {type: TableActionsType.RESET_FILTER}
}
