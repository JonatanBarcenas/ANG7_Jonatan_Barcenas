import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlBase: string = 'https://localhost:44360/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  SignIn(request: SignIn): Observable<any>{
    let url:string = `${this.urlBase}api/user`;
    return this.http.post<any>(url, request, this.httpOptions);
  }

  SignUp(request: User): Observable<any>{
    let url:string = `${this.urlBase}api/user`;
    return <any>this.http.post(url, request, this.httpOptions);
  }
}
