import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { APP_ROUTES } from './config/routes.config';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { MasterDetailCvComponent } from './cv/master-detail-cv/master-detail-cv.component';
import { cvsResolver } from './cv/resolvers/cvs.resolver';
import { RhComponent } from './optimizationPattern/rh/rh.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  {
    path: `${APP_ROUTES.cv}`,
    children: [
      {
        path: '',
        component: CvComponent,
        resolve: { cvs: cvsResolver }
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

  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'rh', component: RhComponent },
  { path: APP_ROUTES.login, component: LoginComponent },
  { path: ':7aja', component: SecondComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
