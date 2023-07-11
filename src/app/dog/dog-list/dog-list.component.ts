import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'daa-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogListComponent {

}
