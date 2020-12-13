import { Injectable } from '@angular/core';
import { HttpCoreService } from '../http/http-core.service';
import { Observable } from 'rxjs';
import { TariffPlan } from '../../model/tariff-plan';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TariffPlanService {

  constructor(private httpCoreService: HttpCoreService) { }

  public getAll(): Observable<Array<TariffPlan>>{
    return this.httpCoreService.get(environment.apiParams.urlApi + '/tariffplans')
      .pipe(map(tariffPlan => {
        return tariffPlan;
      }));
  }
}
