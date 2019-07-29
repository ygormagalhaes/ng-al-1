import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        RouterModule
    ]
})
export class PhotoFormModule { }
