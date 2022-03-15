import { UserDataType } from "../../../types/UserDataType";

export enum TableActionsType {
    SET_FILTER = 'SET_FILTER',
    SET_DATA = 'SET_DATA',
    RESET_FILTER = 'RESET_FILTER'
}

export enum FiltersType {
    IS_ACTIVE = 'IS_ACTIVE',
    NO_FILTERS = 'NO_FILTERS' 
}

interface SetDataAction {
    type: TableActionsType.SET_DATA,
    payload: Array<UserDataType>
}

interface SetFilterAction {
    type: TableActionsType.SET_FILTER,
    payload: FiltersType
}

interface ResetFilterAction {
    type: TableActionsType.RESET_FILTER
}

type TableActions = SetDataAction | SetFilterAction | ResetFilterAction;

interface TableState {
    tableData: Array<UserDataType> | []
    filterType: FiltersType
}

const initialState : TableState = {
    tableData: [],
    filterType: FiltersType.NO_FILTERS
}

export const tableReducer = (state : TableState = initialState, action : TableActions) : TableState => {
    switch (action.type) {
        case TableActionsType.SET_DATA:
            return {...state, tableData: action.payload}

        case TableActionsType.SET_FILTER:
            return {...state, filterType: action.payload}

        case TableActionsType.RESET_FILTER:
            return {...state, filterType: FiltersType.NO_FILTERS}

        default:
            return state
    }
}
