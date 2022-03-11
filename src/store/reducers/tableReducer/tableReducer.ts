import { UserDataType } from "../../../types/UserDataType";

export enum TableActionsType {
    SET_FILTER = 'SET_FILTER',
    SET_DATA = 'SET_DATA'
}

export enum FiltersType {
    IS_ACTIVE = 'IS_ACTIVE'
}

interface SetDataAction {
    type: TableActionsType.SET_DATA,
    payload: Array<UserDataType>
}

interface SetFilterAction {
    type: TableActionsType.SET_FILTER,
    payload: FiltersType
}

type TableActions = SetDataAction | SetFilterAction;

interface TableState {
    tableData: Array<UserDataType> | []
    filterType: string
}

const initialState : TableState = {
    tableData: [],
    filterType: ''
}

export const tableReducer = (state : TableState = initialState, action : TableActions) : TableState => {
    switch (action.type) {
        case TableActionsType.SET_DATA:
            return {...state, tableData: action.payload}

        case TableActionsType.SET_FILTER:
            // if (action.payload === FiltersType.IS_ACTIVE) {
                
            // }
            return {...state, filterType: action.payload}

        default:
            return state
    }
}
