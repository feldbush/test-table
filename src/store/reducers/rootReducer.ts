import { combineReducers } from "redux";
import { tableReducer } from "./tableReducer/tableReducer";

export const rootReducer = combineReducers({
    table: tableReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
