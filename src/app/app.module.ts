import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    PhotosModule,
    ErrorsModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
