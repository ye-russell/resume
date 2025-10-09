import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume';

  constructor(
    private googleAnalyticsService: GoogleAnalyticsService,
    private router: Router
  ) {}

  ngOnInit() {
    // Track page views on route changes
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.googleAnalyticsService.trackPageView(event.urlAfterRedirects);
    });
  }
}
