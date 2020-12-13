import { Injectable } from '@angular/core';
import { Language } from '../../interfaces/language';
import { Ru } from '../../lang/ru';
import { En } from '../../lang/en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = 'ru';

  constructor() { }

  // tslint:disable-next-line:typedef
  getInstance(): Language {
    if (this.currentLang === 'ru') {
      return new Ru();
    }
    if (this.currentLang === 'en') {
      return new En();
    }
  }
}
