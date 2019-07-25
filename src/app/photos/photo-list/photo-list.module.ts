import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosByDescriptionPipe } from './photos-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { PhotoSearchComponent } from './photo-search/photo-search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        PhotosByDescriptionPipe,
        PhotoSearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule
    ]
})
export class PhotoListModule { }
