import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";

import { Observable } from "rxjs/Observable";

import * as firebase from "firebase/app";

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(): void{
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void{
    this.afAuth.auth.signOut();
  }

}
