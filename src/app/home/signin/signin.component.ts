import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SiginComponent implements OnInit {
    @ViewChild('usernameInput', { static: false })
    usernameInput: ElementRef<HTMLInputElement>;

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
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
        this.setFocusToUsernameInput();
        console.error('não foi possível logar.');
    }

    // Seta o focus apenas se renderizando em browser p/ evitar problemas com server rendering.
    private setFocusToUsernameInput() {
        if (this.platformDetectorService.isPlaftormBrowser()) {
            this.usernameInput.nativeElement.focus();
        }
    }
}
