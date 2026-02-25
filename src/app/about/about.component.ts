import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isArchiveOpen = false;

  toggleArchive(): void {
    this.isArchiveOpen = !this.isArchiveOpen;
  }
}
