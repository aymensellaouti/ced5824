import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { CommonModule } from "@angular/common";


const TodoRoutes = [{ path: 'todo', component: TodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(TodoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
