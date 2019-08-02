import { FormGroup, ValidatorFn } from '@angular/forms';

export const usernamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {

    const userName = formGroup.get('userName').value.trim();
    const password = formGroup.get('password').value.trim();
    const isFieldsNotEmpty = userName && password;
    const isFieldsSameValue = userName === password;
    if (isFieldsNotEmpty && isFieldsSameValue) {
        return {
            usernamePassword: true
        };
    }

    return null;
};
