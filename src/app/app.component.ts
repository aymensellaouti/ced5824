import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AppState } from './store/reducer';
import { initAppAction } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ced5824 ';
  router = inject(Router);
  ngxService = inject(NgxUiLoaderService);
  store = inject(Store<AppState>);
  constructor() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.ngxService.start();
    //   } else if (
    //     event instanceof NavigationEnd ||
    //     event instanceof NavigationCancel ||
    //     event instanceof NavigationError
    //   ) {
    //     this.ngxService.stop();
    //   }
    // });
    this.store.dispatch(initAppAction());
  }
}
