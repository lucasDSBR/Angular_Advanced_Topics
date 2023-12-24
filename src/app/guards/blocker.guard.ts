import { CanActivateFn } from '@angular/router';

export const blockerGuard: CanActivateFn = (route, state) => {
  return false;
};
