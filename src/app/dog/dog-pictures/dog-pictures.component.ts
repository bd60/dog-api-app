import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'daa-dog-pictures',
  templateUrl: './dog-pictures.component.html',
  styleUrls: ['./dog-pictures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogPicturesComponent {
  dogImages$ = this.route.params.pipe(
    switchMap(({breed}) => this.dogService.getBreedPictureList(breed)),
  );
  constructor(private dogService: DogService, private route: ActivatedRoute) {}
}
