import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogModule } from './dog/dog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DogCoreModule } from './dog-core/dog-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DogModule,
    BrowserAnimationsModule,
    DogCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
