import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private API_URL="url";

  constructor(private _httpClient: HttpClient) { }

  // contactUsMail(input: any){
  //   return this._httpClient.post(this.API_URL, input);
  // }
  contactUsMail(input: any): Observable<any> {
    return this._httpClient.post(this.API_URL, input);
  }


}
