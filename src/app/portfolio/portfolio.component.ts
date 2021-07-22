import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      title: "English for Kids",
      tools: "Angular, Bootstrap, Node.js, Express, MongoDB, hosting on AWS",
      img: "../../assets/projects/efk.jpg",
      link: "http://ye-russell-english-for-kids.s3-website.eu-central-1.amazonaws.com/"
    },
    {
      title: "Async Race",
      tools: "Vanilla JS, TypeScript, Webpack, SPA, Async coding/Promises, JS Animations, DOM API, server communications (fetch, REST API)",
      img: "../../assets/projects/async-race.png",
      link: "https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/async-race/"
    },
    {
      title: "Match-Match Game",
      tools: "Vanilla JS, Typescript, Webpack, SPA, indexedDB, Eslint, Router, JS Animations",
      img: "../../assets/projects/match-match-game.jpg",
      link: "https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/match-match-game/#about-page"
    },
    {
      title: "Photofilter",
      tools: "Vanilla JS, Canvas API, DOM manipulation, CSS",
      img: "../../assets/projects/photofilter.jpg",
      link: "https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/photo-filter/"
    },
    {
      title: "Virtual Piano",
      tools: "Basic JS, DOM, Events",
      img: "../../assets/projects/virtual-piano.jpg",
      link: "https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/virtual-piano/"
    },
    {
      title: "Lambda Restaraunt",
      tools: "HTML, CSS, Photoshop, Pixel Perfect",
      img: "../../assets/projects/lambda.jpg",
      link: "https://rolling-scopes-school.github.io/ye-russell-JSFEEN/markup-1/"
    },
    {
      title: "Wildlife",
      tools: "HTML, CSS, Figma, Pixel Perfect",
      img: "../../assets/projects/wildlife.jpg",
      link: "https://rolling-scopes-school.github.io/ye-russell-JSFE2021Q1/wildlife/"
    },
    {
      title: "Task app",
      tools: "Node.js with Mongoose",
      img: "../../assets/projects/task.jpg",
      link: "https://peaceful-shore-72566.herokuapp.com/"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
