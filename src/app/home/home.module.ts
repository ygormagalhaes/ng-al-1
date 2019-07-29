import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiginComponent } from './signin/signin.component';
import { ValidationMessageModule } from '../shared/components/validation-message/validation-message.module';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
        SiginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ValidationMessageModule,
        RouterModule,
        HttpClientModule
    ]
})
export class HomeModule { }
