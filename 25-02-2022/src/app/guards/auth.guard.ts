import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // auth sevice injected
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    boolean {
      //If user is not loggedin, It will return false and will not go to admin page
      if(!this.auth.isLoggedIn()){
        this.router.navigate(["/login"]);
        return false;
      }
    return this.auth.isLoggedIn();
  }
  
}
