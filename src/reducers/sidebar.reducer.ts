import { _sideBarActions, ActionTypes } from "../actions/sidebar.actions";

export interface ISidebarState {
    opened: boolean;
}

const initialState: ISidebarState = {
    opened: true
};

export default (state = initialState, actions: _sideBarActions) => {
    switch (actions.type) {
        case ActionTypes.sideBarToggle:
            return {
                ...state,
                opened: actions.opened
            };
        default:
            return state;
    }
};
