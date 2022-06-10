import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-angular';
  post = {
    title: 'Title',
    isFavourite: true,
  };

  onFavChange(eventArgs: FavouriteChangedEventArgs) {
    console.log('Something is changed!');
    console.log(eventArgs);
  }
}
