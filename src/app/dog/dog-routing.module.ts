import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogPicturesComponent } from './dog-pictures/dog-pictures.component';

const routes: Routes = [
 {path: '', component: DogListComponent},
 {path: ':breed', component: DogPicturesComponent},
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
