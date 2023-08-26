import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private Login: AccountService,
    private router: Router) { }

  respForm(response: User){
    
    let request = {...response, status: true}
    console.log(request);
    this.Login.SignUp(request).subscribe(() => this.router.navigate(['/sign-in']));
  }
}
