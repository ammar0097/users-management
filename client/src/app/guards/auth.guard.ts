import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the JWT token exists in local storage
    
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // User is authenticated, allow access
      return true;
    }

    // User is not authenticated, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}