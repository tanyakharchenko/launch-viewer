import { apiService } from "./api";

// TODO: Add interfaces for data

interface GetLaunchesParams {
  startDate: string;
  endDate: string;
}

// TODO: create dynamic api calls depends on items count
export const getLaunches = (params: GetLaunchesParams) =>
  apiService(
    `launch/?format=json&include_suborbital=true&is_crewed=false&related=false&window_end__gte=${params.endDate}&window_start__gte=${params.startDate}&limit=100`
  );
