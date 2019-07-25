import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiginComponent } from './signin/signin.component';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';

@NgModule({
    declarations: [ SiginComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        RouterModule
    ]
})
export class HomeModule { }