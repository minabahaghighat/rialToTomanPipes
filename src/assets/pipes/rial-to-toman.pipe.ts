import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rialToToman'
})
export class RialToTomanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value > 0){
      return value.toString().slice(0, -1);
    }else {
      return 0;
    }
  }

}
