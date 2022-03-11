import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "../reducers/rootReducer";

export const useTypedSelector : TypedUseSelectorHook<RootStateType> = useSelector;
