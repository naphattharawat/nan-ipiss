import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const jwtHelperService = new JwtHelperService();
  const token = sessionStorage.getItem('token');
  if (token) {
    if (jwtHelperService.isTokenExpired(token)) {
      return true;
    } else {
      router.navigateByUrl('/');
      return false;
    }
  } else {
    return true;
  }
};
