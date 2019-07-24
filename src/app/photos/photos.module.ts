import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosByDescriptionPipe } from './photo-list/photos-by-description.pipe';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        PhotosByDescriptionPipe
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PhotosModule { }
