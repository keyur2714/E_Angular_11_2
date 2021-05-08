import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  email : string = '';
  mobileNo : string = '';
  pinCode : string = '';

  constructor() { }

  ngOnInit(): void {
    this.email = 'keyurjava27@gmail.com';
    this.mobileNo = '7387029671';
    this.pinCode = '411027';
  }

}
