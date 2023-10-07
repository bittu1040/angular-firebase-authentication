import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGaurdGuard: CanActivateFn = (route, state) => {

  console.log(route, state)
  const authService = inject(AuthService);
  const router = inject(Router);

   if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }

  
};
