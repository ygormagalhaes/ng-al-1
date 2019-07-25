import { NgModule } from '@angular/core';
import { SiginComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ SiginComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
