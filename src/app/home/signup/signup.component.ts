import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowercaseValidator } from 'src/app/shared/validators/lowercase.validator';
import { UsernameAlreadyTakenService } from 'src/app/home/signup/username-already-taken.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';
import { usernamePasswordValidator } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UsernameAlreadyTakenService ]
})
export class SignupComponent implements OnInit {
    @ViewChild('emailInput', { static: true })
    emailInput: ElementRef<HTMLInputElement>;

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usernameAlreadyTakenService: UsernameAlreadyTakenService,
        private signupService: SignupService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
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
        }, {
            validators: usernamePasswordValidator
        });

        this.setFocusToEmailInputInput();
    }

    signup() {
        const formReady = this.signupForm.valid && !this.signupForm.pending;

        if (formReady) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signupService.signup(newUser)
                .subscribe(
                    () => this.router.navigate(['']),
                    err => console.log(err));
        }
    }

    private setFocusToEmailInputInput() {
        if (this.platformDetectorService.isPlaftormBrowser()) {
            this.emailInput.nativeElement.focus();
        }
    }
}
