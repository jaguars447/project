import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {

  item:Array<any>;

  constructor(service: ItemListService) {
    let itemID = "1"; // Gets item primary key to determine what item to display

    this.item = service.getItem(itemID);
  }

  addToCart(id:string) {
    // Do whatver code to add item to cart
    // Probably will need the item's primary key ID
  }

}
