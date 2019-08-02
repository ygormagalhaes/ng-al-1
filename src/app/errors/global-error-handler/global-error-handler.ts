import { ErrorHandler, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/core/user/user.service';
import { ServerLoggerService } from './server-logger.service';
import { Router } from '@angular/router';

export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    // TODO: Refatorar método.
    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLoggerService = this.injector.get(ServerLoggerService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
            ? location.path() : '';

        const message = error instanceof Error
            ? error.message : error.toString();

        router.navigate(['/error']);

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

            serverLoggerService.logError(errorObject)
                .subscribe(
                    () => console.log('Error logged on server.'),
                    err => console.log('Fail to log error on server.')
                );
        });
    }
}
