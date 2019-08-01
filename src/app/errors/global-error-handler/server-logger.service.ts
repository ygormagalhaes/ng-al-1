import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorLog } from './error-log';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServerLoggerService {

    constructor(private httpClient: HttpClient) { }

    logError(error: ErrorLog) {
        return this.httpClient.post(`${environment.errorLogServer}infra/log`, error);
    }
}
