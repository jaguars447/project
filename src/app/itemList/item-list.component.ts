
import { Component } from '@angular/core';
import { ItemListService } from '../item.service';
import { CategoryListService } from '../category.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {

  category:string;
  itemList:Array<Array<any>>;

  constructor(serviceItem: ItemListService, serviceCategory: CategoryListService ) {
    this.category = serviceCategory.selectedCategory; 
    this.itemList = serviceItem.getItems(this.category);
  }

  selectItem(item:Array<any>, serviceItem: ItemListService) {
    serviceItem.selectedItem = item; 
  }
}
