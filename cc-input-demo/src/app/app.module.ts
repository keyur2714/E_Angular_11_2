import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    EmployeeListComponent,
    DataTableComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
