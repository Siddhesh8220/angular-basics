import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', //uses css selector
  template: `<h2>{{ title | titlecase }}</h2>
    <h2>{{ currentPrice | currency: 'AUD':true:'2.2-2' }}</h2>
    <h4>Custom Pipe: {{ summaryText | summary }}</h4>
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
    </div>
    <!--event-filtering & template variables-->
    <input #email (keyup.enter)="onKeyUp(email.value)" /><br />
    <!--ngModel-->
    <input [(ngModel)]="password" (keyup.enter)="onKeyUpPass()" />`,
})
export class CoursesComponenet {
  title = 'the rise of the planets of the apes';
  courses = ['course1', 'course2', 'course3'];
  courselist;
  imageURL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png';
  colSpan = 2;
  isActive = true;
  password = 'two way bind';
  currentPrice = 2.56896;
  summaryText =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from sde Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

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

  onKeyUp(email?: any) {
    console.log('Enter key is pressed  & ' + 'email is: ' + email);
  }

  onKeyUpPass(email?: any) {
    console.log(this.password);
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
8. @Component add metadata to class to make it a component
9. learn more about pipes in angular documentation
10. # is used to declare template variables
11. ngModel is two way binding
*/
