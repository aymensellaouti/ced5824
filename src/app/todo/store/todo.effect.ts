import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todoActionGroup } from "./actions";
import { map, of, switchMap } from "rxjs";
import { UUID_PROVIDER } from "src/app/injection tokens/uuid.injection-token";
import { Todo } from "../model/todo";

@Injectable({providedIn: 'root'})
export class TodoEffect {
  actions = inject(Actions);
  uuid = inject(UUID_PROVIDER);
  loadTodos$ = createEffect( () => this.actions.pipe(
    ofType(todoActionGroup.getTodos),
    switchMap( action => of([
      new Todo(this.uuid(), 'lundi', 'faire du NgRx'),
      new Todo(this.uuid(), 'mardi', 'faire du ZoneJs'),
    ])),
    map(todos => todoActionGroup.todosLoaded({todos})
  ))
)
}
