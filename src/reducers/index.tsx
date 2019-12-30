import { combineReducers } from "redux";

import HomeReducer, { IHomeState } from "./home.reducer";
import SidebarReducer, { ISidebarState } from "./sidebar.reducer";

export interface IRootState {
    homeState: IHomeState;
    sidebarState: ISidebarState;
}

const rootReducer = combineReducers({
    homeState: HomeReducer,
    sidebarState: SidebarReducer
});

export default rootReducer;
