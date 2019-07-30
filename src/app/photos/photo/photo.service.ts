import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo } from './photo';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    private readonly API_URL = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) { }

    listPhotosFromUser(username: string): Observable<Photo[]> {
        return this.httpClient
            .get<Photo[]>(`${this.API_URL}${username}/photos`);
    }

    listPhotosFromUserPaginated(username: string, page: number): Observable<Photo[]> {
        const params = new HttpParams().append('page', page.toString());
        return this.httpClient
            .get<Photo[]>(`${this.API_URL}${username}/photos`, { params });
    }

    upload(description: string, comments: boolean, photo: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', comments ? 'true' : 'false');
        formData.append('imageFile', photo);

        return this.httpClient.post(`${this.API_URL}photos/upload`, formData);
    }

    findBydId(id: string): Observable<Photo> {
        return this.httpClient.get<Photo>(`${this.API_URL}photos/${id}`);
    }

}
