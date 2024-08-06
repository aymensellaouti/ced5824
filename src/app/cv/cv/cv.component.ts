import { Component, Inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LOGGER_INJECTION_TOKEN } from 'src/app/injection tokens/logger.injection-token';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'trainer',
      '123',
      42,
      ''
    ),
    new Cv(
      2,
      'Dali',
      'sourour',
      'Dev',
      '1234',
      20,
      '     '
    ),
  ];
  selectedCv: Cv | null = null;
  // sayHello = new SayHelloService();
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
  constructor(
    @Inject(LoggerService)
    private loggers: LoggerService[],
    private sayHello: SayHelloService
  ) {
    this.loggers.forEach((logger) => logger.logger('hello :D'));
    this.sayHello.hello();
  }
}
