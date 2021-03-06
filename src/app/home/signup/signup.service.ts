import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignupService {
    private readonly API_URL = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    isUserNameAlreadyTaken(username: string): Observable<any> {
        return this.httpClient.get(`${this.API_URL}user/exists/${username}`);
    }

    signup(newUser: NewUser) {
        return this.httpClient.post(`${this.API_URL}user/signup`, newUser);
    }
}
