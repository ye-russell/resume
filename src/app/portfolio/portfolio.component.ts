import { Component, OnInit } from '@angular/core';
import {
  faReact,
  faAngular,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  faReact = faReact;
  faAngular = faAngular;
  faVuejs = faVuejs;

  workingProjects = [
    {
      company: 'EPAM: Customer – Education / Publicity company. ​',
      projectTitle:
        '2024.05 - till now. The team provided to create interactive learning templates for Customer lines of business to utilize in the courseware creation.',
      participation: [
        'Developed three complex templates individually in a relatively short time, meeting high requirements',
        'Developed a Crossword game from scratch, implementing word randomization and complex user interactions',
        'Developed a Catch game using CSS and JavaScript animations',
        'Developed a Dictation game, creating the word-check logic with the Media API',
        'All templates adhere to high accessibility standards, tested using NVDA tools, etc',
        'Assisted in creating a template builder and shared components',
        'Maintained close and regular collaboration with customers to resolve business logic and UI design issues, propose technical solutions, and demonstrate business results',
      ],
      frameworks: [{ icon: faReact, name: 'React' }],
    },
    {
      company:
        'EPAM Systems - Internal project for a US Information Systems company',
      projectTitle:
        '04.2023 - 04.2024. The project provides secure/scalable / highly-available / multi-tenant cloud-based solutions for the cutting-edge capabilities to efficiently enrich, manage and deliver content, including enrichment and classification, content management/processing / ETL orchestration software, advanced tools for editorial content curation, cost-reducing standard CMS components.',
      participation: [
        'Production-ready system: Users can create, edit, and export documents.',
        'Easily adapted to varying delivery speeds and expertise due to the high level of seniority among project peers.',
        'Developed an Angular service for enhancing user interactions.',
        'Extended HTML editing capabilities and developed annotation functionalities.',
        'Delivered key features including: validation status page, table annotations, insertion of input controls.',
        'Pioneered the experimental use of AI tools in the project, specifically GitHub Copilot.',
        'Participated in training sessions and reported on the efficiency of AI usage, highlighting specific issues.',
        'Achieved a 30% faster project delivery after utilizing AI tools.',
      ],
      frameworks: [{ icon: faAngular, name: 'Angular' }],
    },
    {
      company:
        'EPAM Systems - Internal project for a US Information Systems company',
      projectTitle:
        '11.2022 - 04.2023. The project provides secure/scalable / highly-available / multi-tenant cloud-based solutions for the cutting-edge capabilities to efficiently enrich, manage and deliver content, including enrichment and classification, content management/processing / ETL orchestration software, advanced tools for editorial content curation, cost-reducing standard CMS components.',
      participation: [
        "Frontend developed to represent the orchestration status of business process pipelines.",
        "Maintenance of complex tables.",
        "Customization of filtering options.",
        "Successfully collaborated with developers from Colombia, despite a 12-hour time difference.",
        "Improved unit test coverage from 30% to 80%.",
        "Achieved quick task delivery with minimal bugs."
      ],
      frameworks: [{ icon: faReact, name: 'React' }],
    },
    {
      company:
        'EPAM Systems - Petroleum company internal project from Thailand',
      projectTitle: '01.2022 - 08.2022. Scalability for new oilfields',
      participation: [
        "The Best Business in the World – Now Even Better (epam.com) was mentioned in an article about the success of the delivered product.",
        "Developed new modules to optimize customer activities.",
        "Created nested routing logic for the 'Accumulated Benefit' page.",
        "Collaborated with the backend team on change logs and endpoint modifications.",
        "Reduced the loading time for certain pages by consolidating endpoint calls.",
        "Brought consistency to state management using Vuex.",
        "Maintained support for legacy APEX assets.",
        "Initially worked solo, then mentored a Junior Software Engineer, delegating support for the completed project to him."
      ],
      frameworks: [{ icon: faVuejs, name: 'Vue.js' }],
    },
    {
      company:
        'EPAM Systems - Petroleum company internal project from Thailand',
      projectTitle:
        '09.2021 - 01.2022, 08.2022 - 11.2022. Installation and configuration of internal application for oilfield area.',
      participation: [
        "I was able to quickly onboard and start adding value to the customer.",
        "Quickly identified and fixed bugs in an unfamiliar codebase.",
        "Delivered several customized charts using Chart.js.",
        "Maintained and extended complex tables.",
        "Enhanced data representation for forms.",
        "Conducted constant unit testing and resolved Sonarqube issues.",
        "Adjusted functionality according to feedback from end-users and the product owner.",
        "My successful work was proven by consistent positive feedback from colleagues throughout the year."
      ],
      frameworks: [{ icon: faAngular, name: 'Angular' }],
    },

  ];

  projects = [
    {
      title: 'Advent Calendar',
      tools: 'Angular, Bootstrap',
      img: '../../assets/projects/advent.png',
      link: 'https://advent-calendar-2021.netlify.app/',
    },
    {
      title: 'English for Kids',
      tools: 'Angular, Bootstrap, Node.js, Express, MongoDB, hosting on AWS',
      img: '../../assets/projects/efk.jpg',
      link: 'http://ye-russell-english-for-kids.s3-website.eu-central-1.amazonaws.com/',
    },
    {
      title: 'Async Race',
      tools:
        'Vanilla JS, TypeScript, Webpack, SPA, Async coding/Promises, JS Animations, DOM API, server communications (fetch, REST API)',
      img: '../../assets/projects/async-race.png',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/async-race/',
    },
    {
      title: 'Match-Match Game',
      tools:
        'Vanilla JS, Typescript, Webpack, SPA, indexedDB, Eslint, Router, JS Animations',
      img: '../../assets/projects/match-match-game.jpg',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/match-match-game/#about-page',
    },
    {
      title: 'Photofilter',
      tools: 'Vanilla JS, Canvas API, DOM manipulation, CSS',
      img: '../../assets/projects/photofilter.jpg',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/photo-filter/',
    },
    {
      title: 'Online Zoo',
      tools: 'HTML, CSS, Basic JS, Figma, Pixel Perfect',
      img: '../../assets/projects/online-zoo.jpg',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/online-zoo/index.html',
    },
    {
      title: 'Virtual Piano',
      tools: 'Basic JS, DOM, Events',
      img: '../../assets/projects/virtual-piano.jpg',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/virtual-piano/',
    },
    {
      title: 'Lambda Restaraunt',
      tools: 'HTML, CSS, Photoshop, Pixel Perfect',
      img: '../../assets/projects/lambda.jpg',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFEEN/markup-1/',
    },
    {
      title: 'Wildlife',
      tools: 'HTML, CSS, Figma, Pixel Perfect',
      img: '../../assets/projects/wildlife.jpg',
      link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/wildlife/',
    },
    {
      title: 'Task app',
      tools: 'Node.js with Mongoose',
      img: '../../assets/projects/task.jpg',
      link: 'https://peaceful-shore-72566.herokuapp.com/',
    },
    {
      title: 'Keeper app',
      tools: 'React using Codesandbox',
      img: '../../assets/projects/keeper.jpg',
      link: 'https://k448r.csb.app/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
