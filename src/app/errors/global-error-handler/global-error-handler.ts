import { ErrorHandler, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/user/user.service';

export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);

        const url = location instanceof PathLocationStrategy
            ? location.path : '';

        const message = error instanceof Error
            ? error.message : error.toString();

        StackTrace.fromError(error).then(errorArray => {
            const stringStack = errorArray
                .map(frame => frame.toString())
                .join('\n');

            const errorObject = {
                username: userService.getUsername(),
                url,
                message,
                stack: stringStack
            };
            console.log(message);
            console.log(stringStack);

            console.log('Erro a ser enviado:');
            console.log(errorObject);
        });
    }
}
