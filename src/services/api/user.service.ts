import { Injectable } from '@angular/core';
import { HttpCoreService } from '../http/http-core.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '../../model/token';
import { User } from '../../model/user';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  options: any;
  token: Token;

  constructor(private httpCoreService: HttpCoreService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public isLogin(): boolean
  {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }

  // tslint:disable-next-line:typedef
  public login(username: string, password: string, scope = ''): Observable<Token>
  {
    // @ts-ignore
    return this.httpCoreService.post(environment.apiParams.urlAuth, {
        grant_type : environment.apiParams.grantType,
        client_id : environment.apiParams.clientId,
        client_secret : environment.apiParams.clientSecret,
        username,
        password,
        scope
      // tslint:disable-next-line:no-shadowed-variable
    }).pipe(map(token => {
        localStorage.setItem('token', JSON.stringify(token));
        this.router.navigateByUrl('/panel/events/tile');
        return token;
    }));
  }

  public logout(): boolean
  {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
      this.router.navigateByUrl('/login');
    }
    return true;
  }

  // tslint:disable-next-line:typedef
  public getSelfInfo(): Observable<User>
  {
    return this.httpCoreService.get(environment.apiParams.urlApi + '/user')
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
