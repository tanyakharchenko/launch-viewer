import { Status } from "../types";
import { GET_LAUNCHES_START, GET_LAUNCHES_ERROR, GET_LAUNCHES_SUCCESS } from "./actions/actionTypes";

export interface LaunchesState {
  status: Status;
  items: any[];
}

const defaultState: LaunchesState = {
  status: Status.Loading,
  items: [],
};

// TODO: Add types for redux
export const launchesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_LAUNCHES_START:
      return { ...state, status: Status.Loading };
    case GET_LAUNCHES_ERROR:
      return { ...state, status: Status.Error };
    case GET_LAUNCHES_SUCCESS:
      // TODO: create data adapter to convert data from api to client 
      return { ...state, status: Status.Success, items: action.payload.results };
    default:
      return state;
  }
};
