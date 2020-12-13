import { Component } from '@angular/core';
import { UserService } from '../services/api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartcctvfront';

  constructor(private userService: UserService) {
  }

  ngOnInit () {
  }

}
