import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { DogRoutingModule } from './dog-routing.module';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogPicturesComponent } from './dog-pictures/dog-pictures.component';


@NgModule({
  declarations: [
    DogListComponent,
    DogPicturesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    DogRoutingModule
  ]
})
export class DogModule { }
