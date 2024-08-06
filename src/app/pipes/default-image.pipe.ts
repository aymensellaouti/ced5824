import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTS } from '../config/constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim() ? path : APP_CONSTS.defaultImage;
  }

}
