import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DogService } from '../services/dog.service';
import { DogListView, DogView } from '../dog.interfaces';
import { map, shareReplay, Observable } from 'rxjs';

@Component({
  selector: 'daa-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogListComponent {
  dogList$: Observable<DogListView> = this.dogService.getDogs().pipe(
    map(resp => Object.entries(resp).map(([breed]) => this.toDogView(breed)))
  );
  constructor(private dogService: DogService) {}

  private toDogView(breed: string): DogView {
    return {
      breed,
      image$: this.dogService.getRandomBreedPicture(breed).pipe(shareReplay(1)),
    }
  }
}
