import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly LOGIN_API = 'http://localhost:3000/';

    constructor(
        private httpClient: HttpClient,
        private userService: UserService
    ) { }

    login(credentials: {userName: string, password: string}): Observable<any> {
        return this.httpClient.post(
            `${this.LOGIN_API}user/login`,
            credentials,
            { observe: 'response' })
            .pipe(tap((res: HttpResponse<any>) => {
                const authToken = res.headers.get('x-access-token');
                this.userService.setToken(authToken);
                console.log(`User ${credentials.userName} logged with token ${authToken}`);
            }));
    }
}
