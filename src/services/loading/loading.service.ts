import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private subject = new Subject<any>();

  getInstance(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }

  // tslint:disable-next-line:typedef
  show() {
    this.subject.next(true);
  }

  // tslint:disable-next-line:typedef
  hide() {
    this.subject.next(false);
  }
}
