import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { SignIn, SignInResponse } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { environment } from 'src/app/environments/environment';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
    private login: AccountService,
    private router: Router,
    private alerts: SwalAlertService,
    private cookie: CookieService
    ) { }

  respForm(request: SignIn){
    this.login.SignIn(request).subscribe((response: any) => {
      if(response.hasError){
        this.alerts.errorAlert('Usuario o contraseña incorrecto, favor de validar sus credenciales', 'Error!')
       // alert(response.message);
      }
      if(response.message === 'Authorized'){
        const session = {...response.model, hasSession: true}
        let objTemp = btoa(JSON.stringify(session));
        this.cookie.put('session', objTemp);
        this.router.navigate(['/home']);
      }
   
    }, (error: any) => console.log(error));
    
  }
}
