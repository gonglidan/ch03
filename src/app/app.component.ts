import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  imgurl = 'inventory-app';
  url = 'inventory-app';

  constructor() {
    this.title = 'hello';
    this.imgurl = '/assets/imgs/ng-book2.png';
    this.url = 'http://www.baidu.com';
  }
  onBtnClicked() {
    console.log('hahahah!');
  }

  onInput(evt: Event) {
    this.title = (<HTMLInputElement>evt.target).value;
  }

}
