import { version } from "react";
import { getLaunches } from "../../../data/launchesSource";
// TODO: change typescript config to allow pathes like "src/utils/date";
import { getTodayISOString, getDateInMonthsUTC } from "../../../utils/date";
import {
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_START,
  GET_LAUNCHES_ERROR,
} from "./actionTypes";

export const monthsRange = 3;

// TODO: add types for redux
export const getUpcomingLaunches = () => async (dispatch: any) => {
  dispatch({ type: GET_LAUNCHES_START });
  try {
    const launches = await getLaunches({
      startDate: getTodayISOString(),
      endDate: getDateInMonthsUTC(monthsRange),
    });
    dispatch({ type: GET_LAUNCHES_SUCCESS, payload: launches });
  } catch (error) {
    dispatch({ type: GET_LAUNCHES_ERROR });
  }
};
