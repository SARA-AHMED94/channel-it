import { Pipe, PipeTransform } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number): number {
    return toInteger((value-32)* 5/9);
  }

}
