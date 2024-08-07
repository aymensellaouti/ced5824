import { Component, inject, Inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LOGGER_INJECTION_TOKEN } from 'src/app/injection tokens/logger.injection-token';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs = this.cvService.getCvs();
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  // sayHello = new SayHelloService();
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
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
