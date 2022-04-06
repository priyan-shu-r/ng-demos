import { Injectable } from '@angular/core';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AuthGuard) { }
}
