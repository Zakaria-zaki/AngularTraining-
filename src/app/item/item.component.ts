import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemDetailsComponent} from "../item-details/item-details.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  itemTitle: string = '';

  @ViewChild('myChild')
  title?: ItemDetailsComponent;

  constructor() {
    setTimeout( () => {
      this.title?.seTitle('my Title');
    }, 3000);
  }

  ngOnInit(): void {
  }


}
