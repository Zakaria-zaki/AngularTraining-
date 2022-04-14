import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  @Input()
  itemTitle: string;

  constructor() { }

  seTitle(title: string) {
    console.log('Im in child and title is', title);
  }

}
