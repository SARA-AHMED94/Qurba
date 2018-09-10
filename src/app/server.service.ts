import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { } //ingect http service  
//post method
  postData(path: string, data,header ?): Observable<any> {
    return this.http.post(path, data,header);
  }
}