import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Token } from '../../model/token';

@Injectable({
  providedIn: 'root'
})

export class HttpCoreService {

  token: Token;
  constructor(private httpClient: HttpClient) {

  }

  public get(url: string, options = {}): Observable<any> {
    return this.httpClient.get(url, options);
  }

  public post(url: string, params: any, options = {}): Observable<any> {
    return this.httpClient.post(url, params, options);
  }

}
