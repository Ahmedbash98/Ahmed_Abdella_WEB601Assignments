import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  players:Content[];
  
  constructor() {
    this.players=[{
      id:0,
      name:"Cristion Ronaldo",
      position:"ST",
      age: 37,
      imageLink: undefined,
      nationality: "Portuguese",
      hashtags: undefined
      
    },{
      id:1,
      name: "Mohamed Salah",
      position: "RW",
      age: 29,
      imageLink: undefined,
      nationality: "Egypt",
      hashtags: undefined
    },{
      id:2,
      name: "Alphonso Davies",
      position: "LB",
      age: 21,
      imageLink: undefined,
      nationality: "Canada",
      hashtags: undefined
    },{
      id:3,
      name: "Lionel Messi",
      position: "RW",
      age: 34,
      imageLink: undefined,
      nationality: "Argentina",
      hashtags: undefined
    },{
      id:4,
      name: "karim benzema",
      position: "ST",
      age: 34,
      imageLink: undefined,
      nationality: "France",
      hashtags: undefined
    }
  ]

   }

  ngOnInit(): void {
  }

}
