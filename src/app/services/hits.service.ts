import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AppSettings} from '../constants/constant'
import { ApiResult,Hits} from '../modal/modal';

@Injectable({
  providedIn: 'root'
})
export class HitsService {

  constructor(public http:HttpClient) { }

  get(): Observable<ApiResult> {
    return this.http.get<ApiResult>(AppSettings.API_ENDPOINT+'search_by_date?tags=story')
  }
}
