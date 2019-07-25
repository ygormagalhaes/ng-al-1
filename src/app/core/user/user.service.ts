import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userSubject = new Subject<User>();

    constructor(private tokenService: TokenService) {
        if (this.tokenService.hasToken()) {
            this.decodeTokenAndNotify();
        }
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    decodeTokenAndNotify(): void {
        const user = jwtDecode(this.tokenService.getToken()) as User;
        this.userSubject.next(user);
    }

}
