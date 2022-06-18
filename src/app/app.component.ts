import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  viewMode = 'map';
  title = 'hello-angular';
  ngForList2: any;
  canSave = true;
  courses = [];
  ngForList = [
    { id: 1, name: 'course1' },
    { id: 1, name: 'course2' },
    { id: 1, name: 'course3' },
  ];
  task = {
    title: 'Assigne',
    assignee: {
      name: null,
    },
  };
  post = {
    title: 'Title',
    isFavourite: true,
  };

  add() {
    this.ngForList.push({ id: 4, name: 'course4' });
  }

  loadCourses() {
    this.ngForList2 = [
      { id: 1, name: 'course1' },
      { id: 1, name: 'course2' },
      { id: 1, name: 'course3' },
    ];
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }

  onChange(course: any) {
    course.name = 'updated';
  }
  onFavChange(eventArgs: FavouriteChangedEventArgs) {
    console.log('Something is changed!');
    console.log(eventArgs);
  }
}
