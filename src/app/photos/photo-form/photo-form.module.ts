import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule
    ]
})
export class PhotoFormModule { }
