import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  msg : string = '';

  constructor() {
    console.log("Message Component Object Created...!");
  }

  ngOnInit(): void {
    console.log("Message Component Initialized...!");
    this.msg = 'Hello Good Afternoon...!';
  }

}
