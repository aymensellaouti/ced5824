import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";


const TodoRoutes = [{ path: '', component: TodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(TodoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
