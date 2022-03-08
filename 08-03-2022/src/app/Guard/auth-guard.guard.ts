import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  //inject auth service
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean  
    {
    if(!this.auth.isLoggedIn()) {  // If user is not login, it will redirect to login page and return false
        this.router.navigate(['login']);
        return false;
    }
    return this.auth.isLoggedIn();  // if user is login it will redirect to admin page
    }
  
}
