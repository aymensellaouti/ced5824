import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/optimizationPattern/users.service';
import { FiboPipe } from '../pipe/fibo.pipe';
import { NgFor } from '@angular/common';
export const fibonnaci = (n: number): number => {
  if (n == 1 || n == 0) {
    return 1;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

@Component({
    selector: 'app-display-user-list',
    templateUrl: './display-user-list.component.html',
    styleUrls: ['./display-user-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, FiboPipe]
})
export class DisplayUserListComponent {
  @Input() users: User[] = [];
  fibo(n: number): number {
    const fib = fibonnaci(n);
    console.log({ n, fib });

    return fib;
  }
}
