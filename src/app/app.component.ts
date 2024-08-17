import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { APP_CONSTS } from './config/constantes.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ced5824';
  router = inject(Router);
  http = inject(HttpClient);
  swUpdate = inject(SwUpdate);
  swPush = inject(SwPush);
  ngxService = inject(NgxUiLoaderService);
  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.ngxService.start();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.ngxService.stop();
      }
    });
    this.swUpdate.versionUpdates.subscribe((version) => {
      console.log('Checking Version Update');

      if (version.type === 'VERSION_READY') {
        if (
          confirm(
            `Une nouvelle version de l'application est disponionible, vouslez vous recharger la page ?`
          )
        ) {
          window.location.reload();
        }
      }
    });
  }

  subscribeToNotifications() {
    console.log('In subscribeToNotifications');
    this.swPush
      .requestSubscription({
        serverPublicKey: APP_CONSTS.vapidKeys.publicKey,
      })
      .then((sub: PushSubscription) => {
        // Faites ce que vous voulez avec cet objet
        console.log({ sub });
        this.http
          .post('https://nest-push-ghxv.vercel.app/notifications', sub)
          .subscribe((data) => console.log({ data: data }));
      })
      .catch((err) => {
        //en cas de refus});
        console.log('pbm');
        console.log({ err });
      });
  }
}
