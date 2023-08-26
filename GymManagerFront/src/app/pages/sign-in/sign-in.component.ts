import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn, SignInResponse } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
    private login: AccountService,
    private router: Router
    ) { }

  respForm(request: SignIn){
    this.login.SignIn(request).subscribe((response: SignInResponse) => {
      if(response.title === 'Authorized'){
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }
    })
  }
}
