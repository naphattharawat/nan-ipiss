import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
export const authenGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const jwtHelperService = new JwtHelperService();
  const token = sessionStorage.getItem('token');
  if (jwtHelperService.isTokenExpired(token)) {
    // router.navigateByUrl('/login');
    router.navigateByUrl('/dashboard');
    return false;
  } else {
    return true;
  }
};
