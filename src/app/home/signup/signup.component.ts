import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowercaseValidator } from 'src/app/shared/validators/lowercase.validator';

@Component({
    templateUrl: './signup.component.html'
})
export class SigupComponent implements OnInit {
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            fullname: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            username: ['', [
                Validators.required,
                lowercaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        });
    }
}
