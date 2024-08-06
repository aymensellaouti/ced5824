import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { LOGGER_INJECTION_TOKEN } from '../injection tokens/logger.injection-token';

@Injectable()
export class SayHelloService {
  constructor(@Inject(LOGGER_INJECTION_TOKEN) private loggerService: LoggerService) {}

  hello() {
    this.loggerService.logger('Hello');
  }
}
