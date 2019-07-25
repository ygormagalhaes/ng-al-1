import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SiginComponent } from './signin/signin.component';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';

@NgModule({
    declarations: [ SiginComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule
    ]
})
export class HomeModule { }
