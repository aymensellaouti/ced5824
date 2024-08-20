import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { Store } from "@ngrx/store";
import { TodoState } from "../store/reducer";
import { Observable } from "rxjs";
import { selectTodos } from "../store/selector";
import { todoActionGroup } from "../store/actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent {
  store = inject(Store<TodoState>);
  todos$: Observable<Todo[]> = this.store.select(selectTodos);
  todo = new Todo();
  constructor() {
    this.store.dispatch(todoActionGroup.getTodos());
  }
  addTodo() {
    this.store.dispatch(todoActionGroup.addTodo({ todo: this.todo }));
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo): void {
    this.store.dispatch(todoActionGroup.deleteTodo({ id: todo.id }));
  }
}
