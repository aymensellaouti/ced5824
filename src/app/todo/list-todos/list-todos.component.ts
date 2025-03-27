import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SignalTodo, TodoStatusEnum } from "../model/signalTodo.model";
import { FormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";



@Component({
    selector: "app-list-todos",
    templateUrl: "./list-todos.component.html",
    styleUrls: ["./list-todos.component.css"],
    standalone: true,
    imports: [NgFor, FormsModule],
})
export class ListTodosComponent {
  status = Object.values(TodoStatusEnum);
  @Input() todos: SignalTodo[] = [];
  @Output() statusChanged = new EventEmitter<{id: number, status: TodoStatusEnum}>();
  onChangeTodo(updatedStatusInfos: {id: number, status: string}): void {
    this.statusChanged.emit({
      id: updatedStatusInfos.id,
      status: updatedStatusInfos.status as TodoStatusEnum
    });
  }
}
