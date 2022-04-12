import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', //uses css selector
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courselist">{{ course }}</li>
      <!-- property binding works one way -->
    </ul>
    <img [src]="imageURL" />
    <img src="{{ imageURL }}" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan">Hello</td>
      </tr>
    </table>
    <!--class-binding (adds active class based on values of isActive)-->
    <button class="btn-primary" [class.active]="isActive">Class Binding</button>
    <!--style-binding (adds backgroudColor style based on values of isActive)-->
    <button [style.backgroundColor]="isActive ? 'red' : 'green'">
      Style Binding
    </button>
    <!--event-binding-->
    <div (click)="onDivClick()">
      <button (click)="onSubmit($event)">Event Binding</button>
      <div></div>
    </div> `,
}) //decorator function (adds metadata to make it component)
export class CoursesComponenet {
  title = 'list of courses';
  courses = ['course1', 'course2', 'course3'];
  courselist;
  imageURL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png';
  colSpan = 2;
  isActive = true;

  /* 
  Logic for calling an HTTP service
    constructor() {
        let service = new CoursesService();  tightly coupled
        //if we add new parameter in future we need to change everywhere we used this service
        this.courselist = service.getCourses();
    }
  */

  constructor(service: CoursesService) {
    this.courselist = service.getCourses();
    /*  dependancy injection used but we need to register first
        angulat will only cretae single instance and use that same instance everwhere
        this is called singleton pattern */
  }

  onSubmit($event: any) {
    $event.stopPropagation(); //stopping event propogation
    console.log($event);
  }

  onDivClick() {
    console.log('event bubbling happened');
  }
}

/* 
Notes: 
1. classnames are defined using Pascal Naming convention
2. attr.colspan is used to access html attribute not an dom arttribute
3. mostly dom and html attributes have 1:1 mapping
4. but there are some exception like colspan
5. directive that modifies structure of dom add ex-*ngFor
6. by using ` we can write multiple line html 
7. DOM style object proporties: https://www.w3schools.com/jsref/dom_obj_style.asp
*/
