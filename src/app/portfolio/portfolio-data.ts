import {
  faReact,
  faAngular,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';

export interface WorkingProject {
  company: string;
  projectTitle: string;
  participation: string[];
  frameworks: { icon: any; name: string }[];
  portfolio?: string[];
  featured?: boolean;
}

export interface PetProject {
  title: string;
  tools: string;
  img: string;
  link: string;
  sourceLink?: string;
}

export const WORKING_PROJECTS: WorkingProject[] = [
  {
    "company": "EPAM: Customer – State Geological Organization.",
    "featured": true,
    "projectTitle": "Frontend and Application Lead | Jan 2026 - Present",
    "participation": [
      "Built layered geological visualizations with Leaflet, structured formation metadata and filtering, and CRS-aware mapping workflows.",
      "Modelled geological entities, including formations, coordinates and attributes, for scalable interfaces.",
      "Structured workflows for transforming legacy Soviet-era geological reports and made processing pipelines understandable to domain users.",
      "Led geological data ingestion and map proofs of concept through MVP into production, shaping architecture and application workflows with geoscience stakeholders.",
      "Own frontend and backend-for-frontend technical direction for report ingestion, quality checks, user validation and interactive maps.",
      "Build and guide React, TypeScript and Fastify development across multipart uploads, ZIP processing, S3 storage, PostgreSQL and real-time processing status via SSE.",
      "Lead map and canvas editing and georeferencing validation for geological layers, geometry and attributes; coordinate data contracts with backend, ML, analytics and product teams.",
      "Plan delivery across ingestion, monitoring, validation, mapping and integration; review code and mentor two junior engineers while working with a middle-level engineer."
    ],
    "frameworks": [
      {
        "icon": faReact,
        "name": "React / TypeScript / Fastify"
      }
    ]
  },
  {
    company: 'EPAM: Customer – Middle East Automotive Marketplace.',
    projectTitle:
      'Senior Frontend Engineer | Nov 2025 - Feb 2026. B2C Automotive Marketplace: high-traffic consumer marketplace modernization and analytics-driven UX optimization for a regional automotive platform.',
    participation: [
      'Led performance-driven UI modernization and analytics integration within a high-traffic automotive marketplace, enabling data-informed growth and scalable customer experience.',
      'Delivered measurable UX and performance improvements in a high-traffic B2C ecosystem.',
      'Integrated behavioral analytics pipelines including funnels and engagement metrics to support data-driven product and marketing decisions.',
      'Performed performance optimization across listing-heavy architectures under production load.',
      'Implemented analytics instrumentation and event tracking architecture.',
      'Contributed to revenue-impacting feature rollouts in a competitive regional marketplace.',
      'Collaborated cross-functionally with product and marketing teams.',
    ],
    frameworks: [{ icon: faAngular, name: 'Angular' }],
  },
  {
    company: 'EPAM: Customer – Baker Hughes OnePM (Australian energy service project).',
    projectTitle:
      'Senior Frontend Engineer | Apr - Oct 2025. Modernization of asset management application including redesign of user experience and optimisation of process efficiency by integration AI capabilities.',
    participation: [
      'Developed real-time collaboration, virtualized data tables and analytical dashboards.',
      'Led the development of the summary module, delivering complex facilitation for physical asset steps tracking, progress tracking, burndown charts, timer integration, and summary information charts.',
      'Designed and implemented a filter panel to enable comprehensive application filtering.',
      'Added a strategy management module, including dashboard card drag-and-drop functionality.',
      'Continuously improved existing implementations based on feedback from design teams, business analysts, and customers.',
      'Worked closely with developers from the client\'s team to ensure seamless integration and collaboration.',
      'Conducted active code reviews, participated in architectural discussions, and contributed to decision-making processes.',
      'Utilized Angular 19, Jest, RxJS, and DevExtreme to deliver high-quality, scalable solutions.',
    ],
    frameworks: [{ icon: faAngular, name: 'Angular' }],
  },
  {
    company: 'EPAM: Customer – Education / Publicity company.',
    projectTitle:
      'Frontend Engineer | 2024 - 2025. The team provided to create interactive learning templates for Customer lines of business to utilize in the courseware creation.',
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
    portfolio: ['Crossword generator'],
  },
  {
    company:
      'EPAM Systems - Internal project for a US Information Systems company',
    projectTitle:
      'Frontend Engineer | Apr 2023 - Apr 2024. Content enrichment platform: secure/scalable / highly-available / multi-tenant cloud-based solutions for content management, enrichment and classification, ETL orchestration, editorial curation tools, and cost-reducing standard CMS components.',
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
    portfolio: [],
  },
  {
    company:
      'EPAM Systems - Internal project for a US Information Systems company',
    projectTitle:
      'Frontend Engineer | Nov 2022 - Apr 2023. Pipeline orchestration module: frontend for monitoring and managing business process pipeline status within the content management platform.',
    participation: [
      'Frontend developed to represent the orchestration status of business process pipelines.',
      'Maintenance of complex tables.',
      'Customization of filtering options.',
      'Successfully collaborated with developers from Colombia, despite a 12-hour time difference.',
      'Improved unit test coverage from 30% to 80%.',
      'Achieved quick task delivery with minimal bugs.',
    ],
    frameworks: [{ icon: faReact, name: 'React' }],
    portfolio: [],
  },
  {
    company:
      'EPAM Systems - Petroleum company internal project from Thailand',
    projectTitle: 'Frontend Engineer | Jan - Aug 2022. Scalability for new oilfields',
    participation: [
      'The Best Business in the World – Now Even Better (epam.com) was mentioned in an article about the success of the delivered product.',
      'Developed new modules to optimize customer activities.',
      "Created nested routing logic for the 'Accumulated Benefit' page.",
      'Collaborated with the backend team on change logs and endpoint modifications.',
      'Reduced the loading time for certain pages by consolidating endpoint calls.',
      'Brought consistency to state management using Vuex.',
      'Maintained support for legacy APEX assets.',
      'Initially worked solo, then mentored a Junior Software Engineer, delegating support for the completed project to him.',
    ],
    frameworks: [{ icon: faVuejs, name: 'Vue.js' }],
    portfolio: [],
  },
  {
    company:
      'EPAM Systems - Petroleum company internal project from Thailand',
    projectTitle:
      'Frontend Engineer | Sep 2021 - Jan 2022; Aug - Nov 2022. Installation and configuration of internal application for oilfield area.',
    participation: [
      'I was able to quickly onboard and start adding value to the customer.',
      'Quickly identified and fixed bugs in an unfamiliar codebase.',
      'Delivered several customized charts using Chart.js.',
      'Maintained and extended complex tables.',
      'Enhanced data representation for forms.',
      'Conducted constant unit testing and resolved Sonarqube issues.',
      'Adjusted functionality according to feedback from end-users and the product owner.',
      'My successful work was proven by consistent positive feedback from colleagues throughout the year.',
    ],
    frameworks: [{ icon: faAngular, name: 'Angular' }],
    portfolio: [],
  },
  {
    "company": "Baker Hughes",
    "projectTitle": "Well Completion Field Operations | 2013 - 2015; 2020 (six months)",
    "participation": [
      "Worked in oilfield operations, developing practical understanding of well completion workflows, field data and collaboration with engineering teams."
    ],
    "frameworks": []
  },
];

export const PET_PROJECTS: PetProject[] = [
  {
    title: 'Wells Info',
    tools: 'Nuxt 3, Vue 3, and TypeScript',
    img: 'assets/projects/wells-info-vue.png',
    link: 'https://wells-info.vercel.app/',
    sourceLink: 'https://github.com/ye-russell/wells-info',
  },
  {
    title: 'Art Platform',
    tools: 'Angular, Node.js, AWS (S3, Cloudfront, Cognito, DynamoDB, Lambda, API Gateway)',
    img: 'assets/projects/art-platform.png',
    link: 'https://d2f0064tn69923.cloudfront.net/',
    sourceLink: 'https://github.com/ye-russell/art-platform',
  },
  {
    title: 'Advent Calendar',
    tools: 'Angular, Bootstrap',
    img: 'assets/projects/advent.png',
    link: 'https://advent-calendar-2021.netlify.app/',
  },
  {
    title: 'English for Kids',
    tools: 'Angular, Bootstrap, Node.js, Express, MongoDB, hosting on AWS',
    img: 'assets/projects/efk.jpg',
    link: 'https://english-for-kids-ye-russell-angular.netlify.app/',
  },
  {
    title: 'Async Race',
    tools: 'Vanilla JS, TypeScript, Webpack, SPA, Async coding/Promises, JS Animations, DOM API, server communications (fetch, REST API)',
    img: 'assets/projects/async-race.png',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/async-race/',
  },
  {
    title: 'Match-Match Game',
    tools: 'Vanilla JS, Typescript, Webpack, SPA, indexedDB, Eslint, Router, JS Animations',
    img: 'assets/projects/match-match-game.jpg',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/match-match-game/#about-page',
  },
  {
    title: 'Photofilter',
    tools: 'Vanilla JS, Canvas API, DOM manipulation, CSS',
    img: 'assets/projects/photofilter.jpg',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/photo-filter/',
  },
  {
    title: 'Online Zoo',
    tools: 'HTML, CSS, Basic JS, Figma, Pixel Perfect',
    img: 'assets/projects/online-zoo.jpg',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/online-zoo/index.html',
  },
  {
    title: 'Virtual Piano',
    tools: 'Basic JS, DOM, Events',
    img: 'assets/projects/virtual-piano.jpg',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/virtual-piano/',
  },
  {
    title: 'Lambda Restaurant',
    tools: 'HTML, CSS, Photoshop, Pixel Perfect',
    img: 'assets/projects/lambda.jpg',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFEEN/markup-1/',
  },
  {
    title: 'Wildlife',
    tools: 'HTML, CSS, Figma, Pixel Perfect',
    img: 'assets/projects/wildlife.jpg',
    link: 'https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/wildlife/',
  },
  {
    title: 'Task app',
    tools: 'Node.js with Mongoose',
    img: 'assets/projects/task.jpg',
    link: 'https://peaceful-shore-72566.herokuapp.com/',
  },
  {
    title: 'Keeper app',
    tools: 'React using Codesandbox',
    img: 'assets/projects/keeper.jpg',
    link: 'https://k448r.csb.app/',
  },
];
