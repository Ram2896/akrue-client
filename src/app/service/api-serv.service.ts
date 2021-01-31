import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class ApiServService {
  private apiUrl = `${environment.apiUrl}`;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private _http: HttpClient) {}

  jwtToken = this.getAuhenticatedToken();

  welcome(){
    return this._http.get(`${this.apiUrl}/welcome`);
  }
  getWaitList(userid: any) {
    let headers = new HttpHeaders({
      Authorization: this.jwtToken,
    });
    return this._http.get(`${this.apiUrl}/waitlists/${userid}`, { headers });
  }

  createWaitList(waitlist: any) {
    return this._http.post<any>(`${this.apiUrl}/waitlist/create`, waitlist);
  }

  login(user: any) {
    return this._http.post<any>(`${this.apiUrl}/signin`, user);
  }

  getAuhenticatedUser() {
    return sessionStorage.getItem("USER");
  }
  getAuhenticatedToken() {
    if (this.getAuhenticatedUser) {
      return sessionStorage.getItem("TOKEN");
    }
  }

  contactUsMail(input: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/contactus`, input);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("USER");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("USER");
    sessionStorage.removeItem("TOKEN");
  }
}
