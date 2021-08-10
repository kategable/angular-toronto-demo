import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-toronto-demo';
  list: string[] = [];
  list$ =  this.dataService.list$;
  cartItems$ =  this.dataService.cartItems$;

  constructor( private dataService: DataService) {}

  add(item: any): void {
    this.dataService.addToCart(item);
  }
  remove(index): void {
    this.dataService.removeFromCart(index);
  }
}
