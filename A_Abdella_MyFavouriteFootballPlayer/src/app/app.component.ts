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

//   constructor(){
//     let cr7 = {
//       id: 1,
//       title: "Cristion Ronaldo",
//       body: undefined,
//       author: "Cristion",
//       imageLink: undefined,
//       type: "CR7",
//       hashtags: undefined
//     };


//     let kb9 = {
//       id: 2,
//       title: "Cristion Ronaldo",
//       body: undefined,
//       author: "Cristion",
//       imageLink: undefined,
//       type: "CR7",
//       hashtags: undefined
//     };

//     let km7 = {
//       id: 3,
//       title: "Cristion Ronaldo",
//       body: undefined,
//       author: "Cristion",
//       imageLink: undefined,
//       type: "CR7",
//       hashtags: undefined
//     };


//     let r9 = {
//       id: 4,
//    title: "Cristion Ronaldo",
//       body: undefined,
//       author: "Cristion",
//       imageLink: undefined,
//       type: "CR7",
//       hashtags: undefined
//     };
//   }
// }

name: string; // this variable will now always be a string
tertiaryName = 'Alex'; // this variable will ALSO now always be a string

individualContentItem: Content;
secondContentItem: Content;

list?: List;

readonly valueCannotChange: number;

constructor() {

  this.name = 'Peter';

  let secondaryName: string;
  secondaryName = 'Andrew';

  this.valueCannotChange = 0;
  for (let i = 0; i < 1000; i++)
  {
    this.valueCannotChange++;
  }

  // can't do this because tertiaryName is a string type
  // this.tertiaryName = 1;

  this.updateName();

  this.individualContentItem = {
    id: 0,
    type: "Platformer",
    body: "Very good platformer on the Nintendo Switch",
    title: "aa",
    author: "kk"
    
  };

  // can't do this because it's readonly now
  // can't do this because you need to replace the entire object in order to replace the id in the constructor
  // this.individualContentItem.id = 1;


  // you can however replace the whole object while you're in the constructor
  this.individualContentItem = {
    id: 1,
    type: "Platformer",
    body: "Very good platformer on the Nintendo Switch",
    title: "aa",
    author: "kk"
  };


  this.secondContentItem = {
    id: 50,
    type: "Platformer",
    // don't need to specify a value for imageUrl because it's not optional
    body: undefined,
    title: "aa",
    author: "kk"

  };


  this.list = new List(this.individualContentItem);
  console.log("View the array of items in the list: ", this.list.items);
  console.log("The count of the list is: ", List.contentCount);

  this.processContent(this.individualContentItem);
  this.processContent(this.secondContentItem);

  console.log("Separating my optional test")
  this.processContentOptionally(this.individualContentItem);
  this.processContentOptionally();

}

updateName(): void{
  this.name = "Andrew";
}

processContent(contentItem: Content): void{
  console.log("Content item id: ", contentItem.id);
  console.log("Content body: " + contentItem.body,
    "Content body without tostring invoked: ", contentItem.body)
  // cannot change the value after the constructor set it
  // this.valueCannotChange = 80;

}
processContentOptionally(contentItem?: Content): void{
  // console.log("Content item id: ", contentItem.id); // can't access undefined.id
   console.log("Content item id: ", contentItem?.id); // if contentItem is set, we access the id, otherwise we don't
  if(contentItem)
  {
    console.log("Content body: " + contentItem.body,
      "Content body without tostring invoked: ", contentItem.body)
  }
  // cannot change the value after the constructor set it
  // this.valueCannotChange = 80;

}

}


