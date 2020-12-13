import { Language } from '../interfaces/language';

export class Ru implements Language{
  // @ts-ignore
  locale = {
    authorization_title: 'Авторизация',
    authorization_subtitle: 'Введите email и получите код авторизации',
    authorization_button: 'Войти',
    authorization_titleLogin: 'Логин',
    authorization_titlePassword: 'Пароль',
    info_message: 'Информационное сообщение',
    user_info_downloaded: 'Информация о пользователе загрузилась',
    error: 'Ошибка',
    download_tariff_plan: 'Загрузить тарифные планы!',
    server_error: 'Ошибка сервера',
    menu_developments: 'События',
    menu_checks: 'Чеки',
    menu_shifts: 'Смены',
    menu_table: 'Столы',
    menu_employees: 'Сотрудники',
    menu_disturbance: 'Нарушения',
  };

  // tslint:disable-next-line:typedef
  getLocale() {
    return this.locale;
  }

}
