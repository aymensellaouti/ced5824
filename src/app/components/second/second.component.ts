import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `<p>Second</p><router-outlet/>`,
  styles: [``],
})
export class SecondComponent {
  // V16 +
  @Input('7aja') myParam! : string ;
  activatedRoute = inject(ActivatedRoute);
  constructor() {
    console.log({ acr: this.activatedRoute });
  }
  ngOnInit(): void{
    console.log({ param: this.myParam });

  }
}
