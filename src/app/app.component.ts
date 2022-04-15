import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item = {id: 1};

  color = 'rgb(255,0,0)'

  constructor() {
  }

  changeColor() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    this.color = `rgb(${r}, ${g}, ${b})`
  }

}
