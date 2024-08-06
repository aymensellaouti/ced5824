import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { TodoComponent } from './todo/todo/todo.component';

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
    CvComponent,
    ListcvsComponent,
    CvItemComponent,
    CvCardComponent,
    IsEvenComponent,
    MiniWordComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOGGER_INJECTION_TOKEN,
      useFactory: loggerFactory
    },
    {
      provide: LoggerService,
      useClass: LoggerService,
      multi: true
    },
    {
      provide: LoggerService,
      useClass: Logger2Service,
      multi: true
    },
    {
      provide: SayHelloService,
      useClass: SayHelloService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
