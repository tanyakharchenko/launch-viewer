import { LaunchesState } from "./launches/reducer";

export enum Status {
    Success = "Success",
    Error = "Error",
    Loading = "Loading",
  }

export interface Store {
  launches: LaunchesState;
}