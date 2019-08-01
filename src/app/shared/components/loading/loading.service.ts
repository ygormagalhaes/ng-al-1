import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { LoadingType } from './loading-type';

@Injectable({ providedIn: 'root' })
export class LoadingService {
    loadingSubject = new Subject<LoadingType>();

    getLoading(): Observable<LoadingType> {
        return this.loadingSubject.asObservable().pipe(startWith(LoadingType.STOPPED));
    }

    start(): void {
        console.log('startando loading');
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop(): void {
        console.log('parando loading');
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}
