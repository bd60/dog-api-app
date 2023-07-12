import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'daa-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnDestroy {
  private sub: Subscription;
  constructor(private _snackBar: MatSnackBar, private errorHandlerService: ErrorHandlerService) {
    this.sub = this.errorHandlerService.error$.subscribe(msg => this._snackBar.open(msg, 'Dismiss', {duration: 2000}))
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
