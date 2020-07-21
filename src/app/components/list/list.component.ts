import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ListComponent   {

  @Output() addEvent: EventEmitter<any> = new EventEmitter();
  @Input() list: any[];

  add(item): void {
    this.addEvent.emit(item);
  }

}
