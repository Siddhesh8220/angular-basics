import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', //uses css selector
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courselist">{{ course }}</li>
      <!-- property binding works one way -->
      <img [src]="imageURL" />
      <img src="{{ imageURL }}" />
      <table>
        <tr>
          <td [attr.colspan]="colSpan">Hello</td>
        </tr>
      </table>
      <button class="btn-primary">Hello</button>
      <!-- directive that modifies structure of dom add * -->
    </ul>`,
  //html markup to be rendered for component
  // ` can break template to multiple lines
}) //decorator function (adds metadata to make it component)
export class CoursesComponenet {
  //Pascal Naming convention
  title = 'list of courses';
  courses = ['course1', 'course2', 'course3'];
  courselist;
  imageURL = 'http://lorempixel.com/400/200';
  colSpan = 2;

  //Logic for calling an HTTP service
  //   constructor() {
  //     let service = new CoursesService(); //tightly coupled
  //     //if we add new parameter in future we need to change everywhere we used this service
  //     this.courselist = service.getCourses();
  //   }

  constructor(service: CoursesService) {
    // dependancy injection used but we need to register first
    // angulat will only cretae single instance and use that same instance everwhere
    // this is called singleton pattern
    this.courselist = service.getCourses();
  }
}

// attr.colspan is used to access html attribute not an dom arttribute
// mostly dom and html attributes have 1:1 mapping
// but there are some exception like colspan
