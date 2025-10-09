import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {
    gtag('config', environment.googleAnalyticsId, {
      page_title: 'Resume Website',
      page_location: window.location.href
    });
  }

  public trackEvent(action: string, category: string, label?: string, value?: number) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  public trackPageView(url: string, title?: string) {
    gtag('config', environment.googleAnalyticsId, {
      page_path: url,
      page_title: title
    });
  }
}