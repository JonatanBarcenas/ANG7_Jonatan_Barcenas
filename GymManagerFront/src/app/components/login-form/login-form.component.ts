import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnChanges {

  @Input() isSignUp!: boolean;

  formUser!: FormGroup;

  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
  }

  extraFields = {
    name:new FormControl(''), 
    lastName:new FormControl(''), 
  }

  constructor(
    private fb:FormBuilder
  ){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.initForm();
  }
  
  initForm(){
    let userFields = {...this.defaultFields}
    if(this.isSignUp){
      userFields = {...userFields, ...this.extraFields}
    }
    this.formUser = this.fb.group(
      userFields
    )
  }

 

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formUser.invalid)
    {
      alert("Debe ingresar todos los inputs");
      return;
    }
    console.log("Form Submitted!", this.formUser.value);
  }
  
}
