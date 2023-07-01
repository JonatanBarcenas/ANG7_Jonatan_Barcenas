import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() isSignUp: boolean = true;

  constructor(){

  }

  ngOnInit(): void {
  }

  onSubmitForm(f:NgForm){
    console.log('Valores del from',f.value);
    console.log('Mi fromulario',f);
  }
  
}
