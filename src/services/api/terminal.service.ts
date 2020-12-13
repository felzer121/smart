import { Injectable } from '@angular/core';
import { HttpCoreService } from '../http/http-core.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Terminal } from '../../model/terminal';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor(private httpCoreService: HttpCoreService) { }

  public getAll(): Observable<Array<Terminal>>{
    return this.httpCoreService.get(environment.apiParams.urlApi + '/terminals')
      .pipe(map(terminal => {
        return terminal;
      }));
  }
}
