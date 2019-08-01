import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosModule } from '../photos/photos.module';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    PhotosModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
