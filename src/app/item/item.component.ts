import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemDetailsComponent} from "../item-details/item-details.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent{

  title: string;

  constructor() {
  }



}
