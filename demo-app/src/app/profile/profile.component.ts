import { Component } from "@angular/core";

@Component({
    selector : 'app-profile',
    template : '<h3>{{name}}</h3><p>{{email}}</p>',
    styles : ['h3{color : blue}']
})
export class ProfileComponent {
    name : string = 'Keyur Thakor';
    email : string = 'keyurjava27@gmail.com';
}