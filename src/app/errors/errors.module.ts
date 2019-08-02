import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosModule } from '../photos/photos.module';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { ServerLoggerService } from './global-error-handler/server-logger.service';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent
  ],
  imports: [
    CommonModule,
    PhotosModule,
    HttpClientModule,
    RouterModule
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
