import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'daa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showBack$ = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map(() => !!this.route.firstChild?.snapshot.url.length)
  )
  constructor(private router: Router, private route: ActivatedRoute) {}
}
