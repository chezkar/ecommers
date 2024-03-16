import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/security/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = Inject(SessionService);
  const router = Inject(Router);
  const currentUser = service.currentUserValue;

  if(currentUser){
    return true;
  }

  // router.navigate(['/security/signin']);
  return false;
};
