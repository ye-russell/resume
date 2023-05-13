import { Component, OnInit } from '@angular/core';
import { faReact, faAngular, faVuejs } from '@fortawesome/free-brands-svg-icons';

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
      company: 'EPAM Systems - Internal project for a US Information Systems company',
      projectTitle:
        'The project provides secure/scalable / highly-available / multi-tenant cloud-based solutions for the cutting-edge capabilities to efficiently enrich, manage and deliver content, including enrichment and classification, content management/processing / ETL orchestration software, advanced tools for editorial content curation, cost-reducing standard CMS components.',
      participation: [
        'Tasks / unit tests implementation / design / estimations',
        'Active participation in daily meetings with customers, design and status calls',
        'Taking part in code review processes',
        'Team coordination / support',
        'Project execution tracking (metrics, reports)',
      ],
      frameworks: [{ icon: faAngular, name: 'Angular'}, { icon: faReact, name: 'React'}]
    },
    {
      company:
        'EPAM Systems - Petroleum company internal project from Thailand',
      projectTitle:
        'Installation and configuration of internal application for oilfield area.',
      participation: [
        'Fixing bugs in the app',
        'Supporting, changing and refactoring the written code',
        'Providing components and styling them',
        'Adding the logics and data representation within components',
        'Making tables and other DOM elements',
        'Making a bar/line chart using Chart.js',
        'Participation in Daily stand ups and other team meetings',
      ],
      frameworks: [{ icon: faAngular, name: 'Angular'}]
    },
    {
      company:
        'EPAM Systems - Petroleum company internal project from Thailand',
      projectTitle: 'Scalability for new oilfields',
      participation: [
        'Scale the functionality over new assets and apply additional solutions for a new type of assets such as Platong field',
        'Add the new page for the G1 Field Summary',
        'Collaborate with BE for change logs and endpoint changes',
        'Create the nested routing logic for the Accumulated Benefit page',
        'Reflect endpoints structure changes for Google Maps API',
        'Shorten the loading time for some pages by combining endpoints calls',
        'Bring the consistency over state management with vuex',
        'Support old APEX assets',
      ],
      frameworks: [{ icon: faVuejs, name: 'Vue.js'}]
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
