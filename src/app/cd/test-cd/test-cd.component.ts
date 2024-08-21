import { Component } from '@angular/core';
import { ConnectedUser } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-test-cd',
  templateUrl: './test-cd.component.html',
  styleUrls: ['./test-cd.component.css']
})
export class TestCdComponent {
  name = 'aymen';
  user: ConnectedUser = {id: 1, email: 'test@gmail.com'};
  change(newEmail: string) {
    this.user = {...this.user, email: newEmail};
  }
}
