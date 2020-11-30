import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
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



  getWaitList(userid: any) {
    let headers = new HttpHeaders ({
      Authorization : this.jwtToken
    })
    return this._http.get(`${this.apiUrl}/waitlists/${userid}`, {headers});
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

  isUserLoggedIn() {
    let user = sessionStorage.getItem("USER");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("USER");
    sessionStorage.removeItem("TOKEN");
  }
}
