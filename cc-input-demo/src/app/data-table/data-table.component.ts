import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  dataList : any[] = [];

  @Input()
  headerList : string[] = [];

  @Input()
  fieldList : string[] = [];

  @Input("backgroud-color") bgColor : string = 'info';
  @Input("text-color") textColor : string = 'dark';


  constructor() { }

  ngOnInit(): void {
  }

}
