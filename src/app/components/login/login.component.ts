import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/api/user.service';
import {LoadingService} from '../../../services/loading/loading.service';
import {AlertService} from '../../../services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    this.userService.login('mainadmin@mail.ru' , 'admin').subscribe(result => {
      this.loadingService.hide();
      this.alertService.push('success', 'Авторизация', 'Вы авторизовались!');
    }, error => {
      this.loadingService.hide();
    });
  }

}
