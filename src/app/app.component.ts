import { Component } from '@angular/core';
import { DogService } from './dog/services/dog.service';

@Component({
  selector: 'daa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dog-api-app';
  constructor(private dogService: DogService) {

    this.dogService.getDogs().subscribe(v => console.log(v))
  }
}
