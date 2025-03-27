import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../users.service";
import { DisplayUserListComponent } from '../../rh/display-user-list/display-user-list.component';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    standalone: true,
    imports: [FormsModule, DisplayUserListComponent]
})
export class UserListComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];
  @Output() add = new EventEmitter<string>();
  userFullName: string = '';
  addUser() {
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }

}
