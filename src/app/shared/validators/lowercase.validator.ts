import { AbstractControl } from '@angular/forms';

export function lowercaseValidator(control: AbstractControl) {

    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return {
            lowercase: true
        };
    }

    return null;
}
