import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/api/user.service';
import {environment} from '../environments/environment';
import {LoadingService} from '../services/loading/loading.service';
import {LanguageService} from '../services/lang/language.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private userSerivce: UserService, private loadingService: LoadingService, private langService: LanguageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      this.loadingService.hide();
      if (err.status === 401) {
        this.userSerivce.logout();
        location.reload(true);
      }
      if (err.status === 500 && environment.production) {
        return throwError(this.langService.getInstance().getLocale().server_error);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
