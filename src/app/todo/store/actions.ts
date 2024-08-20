import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { Todo } from "../model/todo";

export const todoActionGroup = createActionGroup({
  source: 'Todo',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    'delete Todo': props<{ id: string }>(),
    'get Todos': emptyProps(),
    'todos loaded': props<{ todos: Todo[] }>(),
  },
});
