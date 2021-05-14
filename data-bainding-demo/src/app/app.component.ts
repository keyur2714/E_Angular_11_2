import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'data-bainding-demo';

  messageList : string[]=[
    "Hi",
    "Hello",
    "How are you?",
    "Good Morning",
    "Good Afternoon"
  ];

  user : User = new User();

  //name : string = 'Keyur';
  //age : number = 34;
  revName : string = '';

  ngOnInit() : void {
    this.user.name = 'Keyur';
    this.user.age = 34;
  }

  reverse() : void {
    //alert(this.name);
    this.revName = this.user.name.split('').reverse().join('');
  }
}
