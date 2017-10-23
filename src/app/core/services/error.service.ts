import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  present(err: any, comment: string) {
    console.log(comment + ': ', err);
  }
}
