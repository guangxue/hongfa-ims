import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const role = authService.getUserRole();
  console.log('User role:', role); // Debugging statement to check the user role
  if (role === 'ADM') {
    return true;
  } else if (role === 'USR' || role === 'GST') {
    return router.navigateByUrl('home');
  } else {
    return router.navigateByUrl('login');
  }
};
