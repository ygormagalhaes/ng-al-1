import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly LOGIN_API = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) { }

    login(credentials: {userName: string, password: string}): Observable<any> {
        return this.httpClient.post(`${this.LOGIN_API}user/login`, credentials);
    }
}
