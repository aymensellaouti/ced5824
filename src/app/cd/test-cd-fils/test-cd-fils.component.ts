import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConnectedUser } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-test-cd-fils',
  templateUrl: './test-cd-fils.component.html',
  styleUrls: ['./test-cd-fils.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCdFilsComponent {
  @Input()
  name = '';
  @Input()
  user!: ConnectedUser;
}
