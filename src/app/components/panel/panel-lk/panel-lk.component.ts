import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/api/user.service';

@Component({
  selector: 'app-panel-lk',
  templateUrl: './panel-lk.component.html',
  styleUrls: ['./panel-lk.component.scss']
})
export class PanelLkComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.userService.logout();
  }
}
