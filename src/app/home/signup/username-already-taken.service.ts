import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { SignupService } from 'src/app/home/signup/signup.service';
import { switchMap, debounceTime, first, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsernameAlreadyTakenService {

    constructor(private signupService: SignupService) { }

    // TODO: Revisar códigos referentes ao RXJS (switchMap e first)
    usernameAlreadyTaken() {
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(username => {
                    return this.signupService.isUserNameAlreadyTaken(username)
                }))
                .pipe(map(isTaken => {
                    return isTaken ? { usernameAlreadyTaken: true } : null;
                }))
                .pipe(first());
        };
    }
}
