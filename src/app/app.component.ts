import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-toronto-demo';
  list: string[] = [];

  add(item: string): void {
    this.list.push(item);
  }
  remove(index):void {
    this.list.splice(index, 1);
  }
}
