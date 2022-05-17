import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Abdella_MyFavouriteFootballPlayer';

cr7: Content;
kb9: Content;
km7: Content;
r9: Content;

list?: List;


constructor() {

  this.cr7 = {
    id: 1,
    title: "Cristion Ronaldo",
    body: undefined,
    author: "Cristion",
    imageLink: undefined,
    type: "CR7",
    hashtags: undefined
  };


  this.kb9 = {
    id: 2,
    title: "Cristion Ronaldo",
    body: undefined,
    author: "Cristion",
    imageLink: undefined,
    type: "CR7",
    hashtags: undefined
  };

  this.km7 = {
    id: 3,
    title: "Cristion Ronaldo",
    body: undefined,
    author: "Cristion",
    imageLink: undefined,
    type: "CR7",
    hashtags: undefined
  };


  this.r9 = {
    id: 4,
 title: "Cristion Ronaldo",
    body: undefined,
    author: "Cristion",
    imageLink: undefined,
    type: "CR7",
    hashtags: undefined
  };
}
}

