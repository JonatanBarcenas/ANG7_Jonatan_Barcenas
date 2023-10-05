import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  constructor(private route:Router, private cookie:CookieService){

  }

  signOut(){
    this.cookie.removeAll();
    this.route.navigate(['/sign-in']);
  }

}
