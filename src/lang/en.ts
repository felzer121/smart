import { Language } from '../interfaces/language';

export class En implements Language{
  // @ts-ignore
  locale = {
    info_message: 'dawdawd',
    user_info_downloaded: 'Иdwadawdь',
    error: 'awdaw',
    download_tariff_plan: 'Заawdwadланы!',
    server_error: 'Оawdawdawdа'
  };

  // tslint:disable-next-line:typedef
  getLocale() {
    return this.locale;
  }

}
