import { Actions, HomeActionTypes } from "../actions/home.actions";

export interface IHomeState {
  dataLoading: boolean;
  dataSuccess: boolean;
  dataFailed: boolean;
  payload: any;
}

const initialState: IHomeState = {
  dataLoading: false,
  dataSuccess: false,
  dataFailed: false,
  payload: []
};

export default (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case HomeActionTypes.fetchDataLoading:
      return {
        ...state,
        dataLoading: true,
        dataSuccess: false,
        dataFailed: false,
        payload: []
      };

    case HomeActionTypes.fetchDataSuccess:
      return {
        ...state,
        dataLoading: false,
        dataSuccess: true,
        dataFailed: false,
        payload: actions.payload
      };

    case HomeActionTypes.fetchDataFailed:
      return {
        ...state,
        dataLoading: false,
        dataSuccess: false,
        dataFailed: true,
        payload: []
      };

    default:
      return state;
  }
};
