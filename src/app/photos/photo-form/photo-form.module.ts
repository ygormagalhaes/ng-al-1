import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationMessageModule,
        PhotoModule,
        ImmediateClickModule
    ]
})
export class PhotoFormModule { }
