import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  public categoriesArray:Array<string>;

  public selectedCategory:string;



  constructor() {
    this.categoriesArray = ["Food", "Kitchen", "Home", "Bathroom", "Supplies"]; // the pretend database
    this.selectedCategory = "Food"; // figure out how to make this change with the setter method below!
  }

  setSelectedCategory(cat:string){
    this.selectedCategory = cat;
  }

  

}
