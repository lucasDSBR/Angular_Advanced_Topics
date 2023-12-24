import { CanActivateFn } from '@angular/router';

export const checkerGuard: CanActivateFn = (route, state) => {
  return true;
};
