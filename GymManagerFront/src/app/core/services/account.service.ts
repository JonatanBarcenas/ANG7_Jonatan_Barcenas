import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SignIn, User } from '../interfaces/user';
import { ResponseArrayModel, ResponseModel } from '../interfaces/response-model';
import { SwalAlertService } from './swal-alert.service';

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

  constructor(
    private http:HttpClient,
    private alertS: SwalAlertService
    ) { }

  errorHandler(error: HttpErrorResponse){
    console.log(error)
    this.alertS.errorAlert('Lo sentimos error detectado, favor de validar mas tarde','Error inesperado!')
    let errorMessage = `Error Code: ${error.status}`
    if(error.status == 404){
      
      errorMessage = `${errorMessage} \n message: ${error.error.message}`
    }
   if(error.error.hasError && error.status == 200){
      errorMessage = `message: ${error.error.message}`
    
   }
    return throwError(() => new Error(errorMessage))
  }

  getUsers(){
    let url: string = `${this.urlBase}api/User`
    return this.http.get<ResponseArrayModel<User>>(url, this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  SignIn(request: SignIn): Observable<ResponseModel<any>>{
    let url:string = `${this.urlBase}api/account`;
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  SignUp(request: User): Observable<ResponseModel<any>>{
    let url:string = `${this.urlBase}api/user`;
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
}
