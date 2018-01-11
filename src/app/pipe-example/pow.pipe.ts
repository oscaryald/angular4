import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: any, pow: number = 1): any {
    return Math.pow(value, pow);
  }

}
