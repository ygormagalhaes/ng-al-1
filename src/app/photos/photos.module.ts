import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    imports: [
        PhotoListModule,
        PhotoFormModule,
        PhotoDetailsModule
    ]
})
export class PhotosModule { }
