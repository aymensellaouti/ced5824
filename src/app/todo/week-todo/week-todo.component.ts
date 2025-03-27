import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoComponent } from '../todo/todo.component';

@Component({
    selector: 'app-week-todo',
    templateUrl: './week-todo.component.html',
    styleUrls: ['./week-todo.component.css'],
    standalone: true,
    imports: [TodoComponent],
})
export class WeekTodoComponent {
  constructor(private toastr: ToastrService) {
    toastr.info('WeekTodo');
  }
}
