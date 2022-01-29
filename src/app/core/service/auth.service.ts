import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { LoginData } from '../interfaces/auth/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:  any;

  constructor(private auth: Auth) {

    this.auth.onAuthStateChanged(user => {
      console.log(user);
      
      this.currentUser = user;
    })
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());;
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }




}
