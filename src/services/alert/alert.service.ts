import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Alert} from '../../model/alert';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private queue: Alert[] = new Array<Alert>();
  private behaviorSubjectQueue: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>(this.queue);

  constructor(private router: Router) {
  }

  // tslint:disable-next-line:typedef
  getInstance() {
    return this.behaviorSubjectQueue;
  }

  // tslint:disable-next-line:typedef
  push(type: string, title: string, message: string) {
    let cssClass = '';
    if (type === 'error') {
      cssClass = 'alert alert-danger';
    }
    if (type === 'success') {
      cssClass = 'alert alert-success';
    }
    const alert = new Alert(title, message, type, cssClass);
    this.queue.push(alert);
    this.behaviorSubjectQueue.next(this.queue);
    this.remove(alert);
  }

  // tslint:disable-next-line:typedef
  remove(alert: Alert) {
    setTimeout(() => {
      this.queue = this.queue.filter(item => item !== alert);
      this.behaviorSubjectQueue.next(this.queue);
    }, 5000);
  }
}
