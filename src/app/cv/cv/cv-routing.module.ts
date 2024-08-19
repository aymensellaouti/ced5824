import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/auth/guards/auth.guard';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { AddCvComponent } from '../add-cv/add-cv.component';
import { DetailsCvComponent } from '../details-cv/details-cv.component';
import { MasterDetailCvComponent } from '../master-detail-cv/master-detail-cv.component';
import { cvsResolver } from '../resolvers/cvs.resolver';
import { CvComponent } from './cv.component';

const routes: Routes = [
  {
    path: `${APP_ROUTES.cv}`,
    children: [
      {
        path: '',
        component: CvComponent,
        resolve: { cvs: cvsResolver },
      },
      { path: 'add', component: AddCvComponent, canActivate: [authGuard] },
      {
        path: 'list',
        component: MasterDetailCvComponent,
        children: [{ path: `:id`, component: DetailsCvComponent }],
      },
      { path: `:id`, component: DetailsCvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
