import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosModule } from '../photos/photos.module';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { ServerLoggerService } from './global-error-handler/server-logger.service';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    PhotosModule,
    HttpClientModule
  ],
  providers: [
    ServerLoggerService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
