import { Component } from '@angular/core';
import { SignIn } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private login: AccountService) { }

  respForm(response: SignIn){
    console.log('Respuesta desde sign In', response);
    this.login.SignIn(response).subscribe(console.log)
  }
}
