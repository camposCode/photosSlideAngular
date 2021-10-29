import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'Hauptbahnhof',
      url: 'assets/img/882A2977.jpg'
    },
    {
      title: 'Beelitz',
      url: 'assets/img/beelitz.jpg'
    },
    {
      title: 'Bikini',
      url: 'assets/img/bikini.jpg'
    },
    {
      title: 'Brandenburger tor',
      url: 'assets/img/brandenburger.jpg'
    },
    {
      title: 'Hertha',
      url: 'assets/img/hertha.jpg'
    },
    {
      title: 'Potsdam',
      url: 'assets/img/potsdam.jpg'
    },
    {
      title: 'Prague',
      url: 'assets/img/praga.jpg'
    },
    {
      title: 'Tv Tower',
      url: 'assets/img/tvtower.jpg'
    },
    {
      title: 'Happy Landing',
      url: 'assets/img/landing.jpg'
    },
    {
      title: 'Sculpture',
      url: 'assets/img/guy.jpg'
    },
    {
      title: 'San Souci',
      url: 'assets/img/sanSouci.jpg'
    },
  ];
}
