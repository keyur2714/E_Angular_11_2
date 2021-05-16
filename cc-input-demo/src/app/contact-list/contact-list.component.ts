import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList : Contact[] = [];

  headerList : string[] = ["Id","Name","Email","Mobile No"];

  fieldList : string[] = ["id","name","email","mobileNo"];

  constructor() { }

  ngOnInit(): void {
    let contact1 = new Contact(11,"Keyur","keyurjava27@gmail.com","738702971");
    let contact2 = new Contact(12,"denish","denishhp6383@gmail.com","738702121");
    let contact3 = new Contact(13,"vinit","vinit.applestone@gmail.com","738702331");

    this.contactList.push(contact1);
    this.contactList.push(contact2);
    this.contactList.push(contact3);
  }

}
