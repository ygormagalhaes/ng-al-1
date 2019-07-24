import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    private readonly API = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) { }

    listPhotosFromUser(username: string): Observable<Photo[]> {
        return this.httpClient
            .get<Photo[]>(`${this.API}${username}/photos`);
    }
}
