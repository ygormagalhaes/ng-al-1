import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
    private readonly TOKEN_KEY = 'authToken';

    hasToken(): boolean {
        return !!this.getToken();
    }

    setToken(token: string): void {
        window.localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string {
        return window.localStorage.getItem(this.TOKEN_KEY);
    }

    removeToken(): void {
        window.localStorage.removeItem(this.TOKEN_KEY);
    }
}
