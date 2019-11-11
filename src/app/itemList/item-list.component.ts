
import { Component } from '@angular/core';
import { ItemListService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  category:string;
  itemList:Array<Array<any>>;

  constructor(service: ItemListService) {
    this.category = "food"; // Gets the category from previous page to know what category to choose from
    this.itemList = service.getItems(this.category); // Gets every item from given category
  }

  selectItem(itemID:string) {
    console.log(itemID); // However data can be transfered between components should go here
  }
}
