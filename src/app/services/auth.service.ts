import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth, public router: Router) {
   }
 


  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }


  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

    signOut(): Promise<void> {
      return this.afAuth.signOut();
    }
  
    // Get the currently logged-in user
    getCurrentUser(): Observable<any> {
      return this.afAuth.user;
    }

    isLoggedIn(): Observable<any> {
      return this.afAuth.user;
    }


}
