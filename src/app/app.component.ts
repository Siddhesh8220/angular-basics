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
  courses = [];
  ngForList = [
    { id: 1, name: 'course1' },
    { id: 1, name: 'course2' },
    { id: 1, name: 'course3' },
  ];
  post = {
    title: 'Title',
    isFavourite: true,
  };

  onFavChange(eventArgs: FavouriteChangedEventArgs) {
    console.log('Something is changed!');
    console.log(eventArgs);
  }
}
