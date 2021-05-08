import { Component, OnInit } from '@angular/core';
import { Eduction } from './education.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  educations : Eduction[] = []; // Declaration of Array

  // educations = [
  //   {
  //     yearOfPassing : 2000,
  //     digree : 'S.S.C',
  //     university : 'Gujrat Board',
  //     percentage : 72.14
  //   },
  //   {
  //     yearOfPassing : 2002,
  //     digree : 'H.S.C',
  //     university : 'Gujrat Board',
  //     percentage : 66.55
  //   },
  //   {
  //     yearOfPassing : 2006,
  //     digree : 'B-Tech',
  //     university : 'S.P University',
  //     percentage : 65.10
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
    let education1 = new Eduction();
    education1.digree = 'S.S.C';
    education1.yearOfPassing = 2000;
    education1.university = 'Gujrat Board';
    education1.percentage = 72.14;

    let education2 = new Eduction();
    education2.digree = 'H.S.C';
    education2.yearOfPassing = 2002;
    education2.university = 'Gujrat Board';
    education2.percentage = 66.55;

    let education3 = new Eduction();
    education3.digree = 'B-Tech';
    education3.yearOfPassing = 2006;
    education3.university = 'S.P University';
    education3.percentage = 65.10;

    let education4 = new Eduction();
    education4.digree = 'M.B.A';
    education4.yearOfPassing = 2008;
    education4.university = 'S.P University';
    education4.percentage = 60.10;

    this.educations.push(education1);
    this.educations.push(education2);
    this.educations.push(education3);
    this.educations.push(education4);

  }

}
