import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

import { Router } from "@angular/router";

import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService:AuthService,
    private router: Router
  ){
    this.authService.user
      .subscribe((user: firebase.User) => {
        if(!user){
          this.router.navigate(['/login']);
        } else{
          this.router.navigate(['/']);
        }
      });
  }
}
