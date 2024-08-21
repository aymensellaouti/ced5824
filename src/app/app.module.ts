import { NgModule, isDevMode } from '@angular/core';
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
import { IsEvenComponent } from './components/is-even/is-even.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { LOGGER_INJECTION_TOKEN } from './injection tokens/logger.injection-token';
import { loggerFactory } from './provider factories/logger.provider-factory';
import { SayHelloService } from './services/say-hello.service';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { UUID_PROVIDER } from './injection tokens/uuid.injection-token';
import  {v4 as uuidV4} from 'uuid';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestFormComponent } from './form/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestRxjsComponent } from './rxjs/test-rxjs/test-rxjs.component';
import { authInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { SliderComponent } from './rxjs/slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TestCdComponent } from './cd/test-cd/test-cd.component';
import { TestCdFilsComponent } from './cd/test-cd-fils/test-cd-fils.component';
import { DisplayUserListComponent } from './rh/display-user-list/display-user-list.component';
import { FiboPipe } from './rh/pipe/fibo.pipe';
import { FirstSignalComponent } from './signal/first-signal/first-signal.component';
import { ListTodosComponent } from './todo/list-todos/list-todos.component';
import { SignalTodo } from './todo/model/signalTodo.model';
import { SignalTodoComponent } from './todo/signal-todo/signal-todo.component';


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

    //Directives
    IsEvenComponent,
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    NavbarComponent,
    TestFormComponent,
    LoginComponent,

    //RxJS
    TestRxjsComponent,
    SliderComponent,
    ProductsComponent,
    TestCdComponent,
    TestCdFilsComponent,

    //Optimization
    RhComponent,
    UserListComponent,
    DisplayUserListComponent,
    FiboPipe,
    FirstSignalComponent,

    ListTodosComponent,
    SignalTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxUiLoaderModule,
    StoreModule.forRoot({ ux: appReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
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
