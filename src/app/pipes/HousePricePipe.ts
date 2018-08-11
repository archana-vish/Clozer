import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'housePricePipe'})
export class HousePricePipe implements PipeTransform {
  transform(value: number): string {

    if (value < 9000) {
      return value + '';
    } else if ( value >= 100000 && value < 1000000) {
      console.log(value/10000);
      console.log(Math.floor(value/10000));
      return '£' + (value/100000).toFixed(2) + 'K';
    } else {
      console.log(value/1000000);
      console.log(Math.floor(value/1000000));
      return '£' + (value /1000000).toFixed(2) + 'M';
    }

  }
}
