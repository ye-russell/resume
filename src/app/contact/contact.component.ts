import { Component } from '@angular/core';
import { faFacebook, faGithub, faLinkedin, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faPhone = faPhone;
  faMail = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTelegram = faTelegram;
  faDiscord = faDiscord;
}
