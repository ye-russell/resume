import { Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: false,
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  faDownload = faDownload;
}
