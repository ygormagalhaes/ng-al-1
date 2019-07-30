import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        ValidationMessageModule
    ],
    exports: [ PhotoDetailsComponent ]
})
export class PhotoDetailsModule { }
