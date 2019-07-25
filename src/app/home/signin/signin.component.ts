import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SiginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(): void {
        const userName = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        this.authService.login({userName, password})
            .subscribe(
                () => this.redirectAfterLogin(userName),
                err => this.catchErrorOnLogin(err));
    }

    private redirectAfterLogin(username: string): void {
        this.router.navigate(['user', username]);
    }

    private catchErrorOnLogin(err: Error): void {
        this.loginForm.reset();
        console.error('não foi possível logar.');
    }
}
