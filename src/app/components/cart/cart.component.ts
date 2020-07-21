import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent   {

  @Input() list: any[];
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  remove(index): void{
    this.removeEvent.emit(index);
  }

}
