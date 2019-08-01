import { ErrorHandler } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

export class GlobalErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        StackTrace.fromError(error).then(errorArray => {
            const error2String = errorArray
                .map(frame => frame.toString())
                .join('\n');
            console.log(error2String);
        });
    }
}
