import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../../../services/alert/alert.service';
import {Alert} from '../../../model/alert';

// tslint:disable-next-line:component-selector
@Component({ selector: 'alert', templateUrl: 'alert.component.html' , styleUrls: ['./alert.component.css']})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;
  public messages: Alert[] = new Array<Alert>();

  constructor(private alertService: AlertService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.alertService.getInstance().subscribe(alerts => {
      this.messages = alerts;
    });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
