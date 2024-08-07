import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-week-todo',
  templateUrl: './week-todo.component.html',
  styleUrls: ['./week-todo.component.css'],
})
export class WeekTodoComponent {
  constructor(private toastr: ToastrService) {
    toastr.info('WeekTodo');
  }
}
