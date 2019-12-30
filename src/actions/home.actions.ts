export enum HomeActionTypes {
  fetchDataLoading = "/actions/home/FETCH_DATA_LOADING",
  fetchDataSuccess = "/actions/home/FETCH_DATA_SUCCESS",
  fetchDataFailed = "/actions/home/FETCH_DATA_SUCCESS"
}

export interface FetchDataLoad {
  type: HomeActionTypes.fetchDataLoading;
}

export interface FetchDataSuccess {
  type: HomeActionTypes.fetchDataSuccess;
  payload: [];
}

export interface FetchDataFailed {
  type: HomeActionTypes.fetchDataFailed;
}

function homeDataLoading(): FetchDataLoad {
  return {
    type: HomeActionTypes.fetchDataLoading
  };
}

function homeDataSuccess(payload: []): FetchDataSuccess {
  return {
    type: HomeActionTypes.fetchDataSuccess,
    payload
  };
}

function homeDataFailed(): FetchDataFailed {
  return {
    type: HomeActionTypes.fetchDataFailed
  };
}

export type Actions = FetchDataLoad | FetchDataSuccess | FetchDataLoad;

export const HomeActions = {
  homeDataLoading,
  homeDataSuccess,
  homeDataFailed
};
