import { Injectable } from '@angular/core';
import { AlertType, Alert } from './alert';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    alertSubject: Subject<Alert>;

    success(alertType: AlertType, message: string) {
        this.alert(alertType, message);
    }

    warning(alertType: AlertType, message: string) {
        this.alert(alertType, message);
    }

    danger(alertType: AlertType, message: string) {
        this.alert(alertType, message);
    }

    info(alertType: AlertType, message: string) {
        this.alert(alertType, message);
    }

    private alert(alertType: AlertType, message: string) {
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert(): Observable<Alert> {
        return this.alertSubject.asObservable();
    }
}
