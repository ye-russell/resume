import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faFacebook, faGithub, faLinkedin, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone = faPhone;
  faMail = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTelegram = faTelegram;
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }
}
