import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/api/user.service';
import { User } from '../../../model/user';
import { AlertService } from '../../../services/alert/alert.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { TariffPlanService } from '../../../services/api/tariff-plan.service';
import { TerminalService } from '../../../services/api/terminal.service';
import {LanguageService} from '../../../services/lang/language.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public locale: any;
  currentUser: User;
  // tslint:disable-next-line:variable-name
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private tariffPlanService: TariffPlanService,
    private terminalService: TerminalService,
    private langService: LanguageService
  ) {
    this.locale = langService.getInstance().getLocale();
}

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout();
  }

  // tslint:disable-next-line:typedef
  success() {
    this.alertService.push('success', this.locale.info_message, 'Хорошее сообщение');
  }

  // tslint:disable-next-line:typedef
  error() {
    this.alertService.push('error', this.locale.error, 'Плохое сообщение');
  }

  // tslint:disable-next-line:typedef
  tariff() {
    this.loadingService.show();
    this.tariffPlanService.getAll().subscribe(t => {
      console.log(t);
      this.loadingService.hide();
    }, error1 => {
      this.alertService.push('error', 'ОШИБКА', error1);
    });
  }

  // tslint:disable-next-line:typedef
  terminals() {
    this.loadingService.show();
    this.terminalService.getAll().subscribe(terminal => {
      console.log(terminal);
      this.loadingService.hide();
    }, error1 => {
      this.alertService.push('error', 'ОШИБКА', error1);
    });
  }

}
