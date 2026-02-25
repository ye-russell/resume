import { Component } from '@angular/core';
import { WORKING_PROJECTS, PET_PROJECTS } from './portfolio-data';

@Component({
  standalone: false,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  workingProjects = WORKING_PROJECTS;
  projects = PET_PROJECTS;
  openedProject = '';

  openModal(str: string) {
    this.openedProject = str;
  }

  closeModal() {
    this.openedProject = '';
  }
}
