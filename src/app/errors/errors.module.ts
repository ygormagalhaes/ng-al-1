import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosModule } from '../photos/photos.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    PhotosModule
  ]
})
export class ErrorsModule { }
