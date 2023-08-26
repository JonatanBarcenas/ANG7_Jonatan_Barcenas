import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hasSession = environment.hasSession;

  constructor(){

  }

  ngOnInit(): void {
  }
}
