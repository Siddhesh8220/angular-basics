import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponenet } from './courses.component';
import { CoursesService } from './courses.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, CoursesComponenet, TestComponent], // all components that are part of this module
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
