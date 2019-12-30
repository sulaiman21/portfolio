export enum ActionTypes {
    sideBarToggle = "/actions/SideBar/SIDEBARTOGGLE"
}

export interface SideBarToggle {
    type: ActionTypes.sideBarToggle;
    opened: boolean;
}

function toggleSideBar(opened: boolean): SideBarToggle {
    return {
        type: ActionTypes.sideBarToggle,
        opened
    };
}

export type _sideBarActions = SideBarToggle;
export const SideBarActions = {
    toggleSideBar
};
