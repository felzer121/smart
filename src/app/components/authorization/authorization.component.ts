import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/lang/language.service';
import { UserService } from '../../../services/api/user.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { AlertService } from '../../../services/alert/alert.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public locale: any;
  // tslint:disable-next-line:variable-name
  constructor(
    private langService: LanguageService,
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {
    this.locale = langService.getInstance().getLocale();
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.loadingService.show();
    this.userService.login('mainadmin@mail.ru' , 'admin').subscribe(result => {
      this.loadingService.hide();
      this.alertService.push('success', 'Авторизация', 'Вы авторизовались!');
      this.loadingService.show();
      this.userService.getSelfInfo().subscribe(result2 => {
        this.loadingService.hide();
        this.alertService.push('success', this.locale.info_message, this.locale.user_info_downloaded);
      }, error1 => {
        this.alertService.push('error', 'ОШИБКА', error1);
      });
    }, error => {
      this.loadingService.hide();
    });
  }

}
