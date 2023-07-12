import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    ErrorMessageComponent
  ]
})
export class DogCoreModule { }
