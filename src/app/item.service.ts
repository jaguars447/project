import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  items:Array<Array<string>>;

  constructor() {
    this.items = [["1", "Banana", "10"],["4", "Tomatoe", "400"],["7", "Chicken", "1"],["12", "Ice Cream", "5"]]; // the pretend database
  }

  getItem(id:string, fields:Array<any> = []) {
    // SELECT FROM items WHERE id = "id" or something like that

    if (fields === []) {
      // return item with primary key id with all fields
    }
    else {
      // return item with primary key id with specified fields
    }

    // Dummy code that simulates connecting to database from component's point of view
    let foundItem:Array<string> = [];

    this.items.forEach(function (item) {
      if (item[0] === id) {
        foundItem = item;
      }
    })
    return foundItem; // throw some error if item isn't found
  }

  getItems(category:string, fields:Array<any> = []) {
    if (fields === []) {
      // return item with all fields from specified category
    }
    else {
      // return item with specified fields from specified category (always include ID probably)
    }

    // Dummy code that simulates connecting to database from component's point of view
    if (category === "food")
      return [["1", "Banana", "10"],["4", "Tomatoe", "400"],["7", "Chicken", "1"],["12", "Ice Cream", "5"]];
    return [[]];
  }
}
