import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrls: ['./first-signal.component.css'],
})
export class FirstSignalComponent {
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  updateSignal(mySignal: WritableSignal<number>,element: string) {
    mySignal.set(+element)
  }
}
