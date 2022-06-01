import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // set token will receive tokens and set inside the local storage
  setToken(token: string): void {
    localStorage.setItem('token', token); //set inside local storage
  }
  
  // get token will return token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // isloggedIn will check token is present inside local storage or not
  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout()
  {
    localStorage.removeItem('token'); //removing the token from local storage 
    this.router.navigate(['login']); //and navigating back user to local storage
  }

  // In login method we are receiving one object which has email and password and returning observable from this method
  login({ email, password }: any): Observable<any> {
    // if(this.userEmail == this.email.value && this.userPassword == this.password.value)
    if(email === 'admin@gmail.com' && password === 'Admin@12') 
    {
      this.setToken('qwert');  //random tokens 
      return of({ name: 'Priyanshu Raj', email: 'admin@gmail.com'})
    }
    // unless and until user will not authenticated they will not allowed to go to admin page
    //If userID and password not matched it will throw an error
    return throwError(new Error('Failed to login'));
  }
}
