import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HitsService {

  constructor(public http:HttpClient) { }

  get(): Observable<any> {
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  }
}
