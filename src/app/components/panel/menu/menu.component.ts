import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../../services/lang/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public locale: any;
  // tslint:disable-next-line:variable-name
  constructor(
    private langService: LanguageService,
  ) {
    this.locale = langService.getInstance().getLocale();
  }
  ngOnInit(): void {
  }

}
