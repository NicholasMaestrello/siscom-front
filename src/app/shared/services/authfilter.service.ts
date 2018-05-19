import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthFilterService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    this.isLogged();
    if (localStorage.getItem('user'))
      return true;
    else {
      this.router.navigate(['/login']);
      return false
    }
  }

  isLogged(): boolean {
    return true;
  }


}
