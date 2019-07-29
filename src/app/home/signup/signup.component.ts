import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowercaseValidator } from 'src/app/shared/validators/lowercase.validator';
import { UsernameAlreadyTakenService } from 'src/app/home/signup/username-already-taken.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usernameAlreadyTakenService: UsernameAlreadyTakenService,
        private signupService: SignupService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowercaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.usernameAlreadyTakenService.usernameAlreadyTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err));
    }
}
