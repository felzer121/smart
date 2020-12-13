import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {UserService} from '../../../services/api/user.service';

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.css']
})
export class LkComponent implements OnInit {

  constructor(private title: Title, private userService: UserService) { }

  ngOnInit(): void {
    this.title.setTitle('Личный кабинет');
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.userService.logout();
  }

}
