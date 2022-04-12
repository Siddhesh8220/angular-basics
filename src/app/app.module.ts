import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponenet } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, CoursesComponenet, TestComponent, SummaryPipe], // all components that are part of this module
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
