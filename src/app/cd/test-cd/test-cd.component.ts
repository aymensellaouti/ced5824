import { Component } from '@angular/core';
import { ConnectedUser } from 'src/app/auth/services/auth.service';
import { TestCdFilsComponent } from '../test-cd-fils/test-cd-fils.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-test-cd',
    templateUrl: './test-cd.component.html',
    styleUrls: ['./test-cd.component.css'],
    standalone: true,
    imports: [FormsModule, TestCdFilsComponent]
})
export class TestCdComponent {
  name = 'aymen';
  user: ConnectedUser = {id: 1, email: 'test@gmail.com'};
  change(newEmail: string) {
    this.user = {...this.user, email: newEmail};
  }
}
