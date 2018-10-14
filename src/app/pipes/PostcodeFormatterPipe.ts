import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'postcodeFormatterPipe'})
export class PostcodeFormatterPipe implements PipeTransform {
  transform(postcode: string): string {
    //let formattedPostcode: string;
    return (postcode.substring(0,postcode.length-3) + ' ' + postcode.substring(postcode.length -3));
  }

}
