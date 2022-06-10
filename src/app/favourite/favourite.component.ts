import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // inputs: ['isFavourite'], //another way to add input
})
export class FavouriteComponent implements OnInit {
  @Input('isFavourite') isFavourite: boolean = false; //'is-favourite optional alias
  // if we change variable name in future alias will not change
  // reduces no of chnages needed if renamed
  @Output('changes') changes = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.changes.emit({ newValue: 'Hello' });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: String;
}
