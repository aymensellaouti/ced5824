import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListcvsComponent } from './cv/listcvs/listcvs.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { IsEvenComponent } from './components/is-even/is-even.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { LOGGER_INJECTION_TOKEN } from './injection tokens/logger.injection-token';
import { loggerFactory } from './provider factories/logger.provider-factory';
import { SayHelloService } from './services/say-hello.service';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { UUID_PROVIDER } from './injection tokens/uuid.injection-token';
import  {v4 as uuidV4} from 'uuid';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { TestFormComponent } from './form/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestRxjsComponent } from './rxjs/test-rxjs/test-rxjs.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { SliderComponent } from './rxjs/slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { AutocompleteComponent } from './cv/autocomplete/autocomplete.component';
import { MasterDetailCvComponent } from './cv/master-detail-cv/master-detail-cv.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';
import { TodoModule } from './todo/todo.module';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,

    // Cv
    CvComponent,
    ListcvsComponent,
    CvItemComponent,
    CvCardComponent,
    EmbaucheComponent,
    AddCvComponent,
    AutocompleteComponent,
    MasterDetailCvComponent,
    DetailsCvComponent,

    //Directives
    IsEvenComponent,
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,


    NavbarComponent,
    TestFormComponent,
    LoginComponent,

    //RxJS
    TestRxjsComponent,
    SliderComponent,
    ProductsComponent,

    //Optimization
    RhComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxUiLoaderModule,
  ],
  providers: [
    {
      provide: LOGGER_INJECTION_TOKEN,
      useFactory: loggerFactory,
    },
    {
      provide: LoggerService,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LoggerService,
      useClass: Logger2Service,
      multi: true,
    },
    {
      provide: SayHelloService,
      useClass: SayHelloService,
    },
    {
      provide: UUID_PROVIDER,
      useValue: uuidV4,
    },
    authInterceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
