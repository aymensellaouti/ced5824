import { createReducer, on } from "@ngrx/store";
import { initAppAction } from "./actions";
import { TodoState } from "../todo/store/reducer";


export interface AppState {
  appName: string;
  todo: TodoState
}

export const appInitalState = {
  appName: '',
};

export const appReducer = createReducer(
  appInitalState,
  on(initAppAction, (stateLe9dim) => ({...stateLe9dim, appName:"CED"}))
);
