import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';

type canActivateReturnType = boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): canActivateReturnType {
        if (!this.userService.isLogged()) {
            this.router.navigate([''], {
                queryParams: {
                    from: state.url
                }
            });
            return false;
        }
        return true;
    }

}
