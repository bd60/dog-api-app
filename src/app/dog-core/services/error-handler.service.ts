import { Injectable } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private errorSubject = new Subject<string>();
  error$ = this.errorSubject.pipe(debounceTime(1000));
  constructor() { }
  handleError(errorMessage: string) {
    this.errorSubject.next(errorMessage);
  }
}
