import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {
        if (this.tokenService.hasToken()) {
            this.decodeTokenAndNotify();
        }
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeTokenAndNotify();
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    decodeTokenAndNotify(): void {
        const user = jwtDecode(this.tokenService.getToken()) as User;
        this.userSubject.next(user);
    }

    logout(): void {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

}
