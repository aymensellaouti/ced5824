import { Component, inject, Inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LOGGER_INJECTION_TOKEN } from 'src/app/injection tokens/logger.injection-token';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
// import { TodoService } from 'src/app/todo/service/todo.service';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, retry } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs: Cv[] = inject(ActivatedRoute).snapshot.data['cvs'];
  selectedCv$: Observable<Cv | null> = this.cvService.selectCv$;
  // todoService = inject(TodoService);
  // sayHello = new SayHelloService();
  // onSelectCv(cv: Cv) {
  //   this.selectedCv = cv;
  //   this.todoService.logTodos();
  // }
  constructor(
    @Inject(LoggerService)
    private loggers: LoggerService[],
    private sayHello: SayHelloService,
    private toastr: ToastrService
  ) {
    this.loggers.forEach((logger) => logger.logger('hello :D'));
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: (err) => {
    //     toastr.error('Les donnees sont fictives merci de contacter l admin');
    //     this.cvs = this.cvService.getFakeCvs();
    //   },
    // });
    // this.cvService.selectCv$.subscribe((cv) => (this.selectedCv = cv));
  }
}
