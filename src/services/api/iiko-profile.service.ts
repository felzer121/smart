import { Injectable } from '@angular/core';
import {HttpCoreService} from '../http/http-core.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {IikoProfile} from '../../model/iiko-profile';

@Injectable({
  providedIn: 'root'
})
export class IikoProfileService {

  constructor(private httpCoreService: HttpCoreService) { }

  public getAll(): Observable<Array<IikoProfile>>{
    return this.httpCoreService.get(environment.apiParams.urlApi + '/iikoprofiles')
      .pipe(map(iikoProfile => {
        return iikoProfile;
      }));
  }
}
