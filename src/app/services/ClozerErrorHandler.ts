import {ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class ClozerErrorHandler implements ErrorHandler {
  handleError(error) {
    // do something with the exception
    //console.log('Handling errors');
  }
}
