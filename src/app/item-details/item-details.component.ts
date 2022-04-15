import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  @Input()
  title: string = '';

  @Output()
  titleChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }



}
