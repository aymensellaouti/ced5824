import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo';

export interface TodoState {
  todos: Todo[];
}

export const todoInitalState = {
  todos: [],
};

export const todoReducer = createReducer(
  todoInitalState,
);
