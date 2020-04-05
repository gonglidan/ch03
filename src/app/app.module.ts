import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Studentlist } from './student-list.component';
import { Student } from './student.component';

@NgModule({
  declarations: [
    AppComponent,
    Studentlist,
    Student
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
