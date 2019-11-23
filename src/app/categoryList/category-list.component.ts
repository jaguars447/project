import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category.service';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  currentUser: User;
  catagoryList:Array<string>;
  service: CategoryListService;

  constructor(service: CategoryListService,private authenticationService: AuthenticationService,
    private userService: UserService, private router:Router) {

    this.currentUser = this.authenticationService.currentUserValue;
    this.catagoryList = service.categoriesArray;

  }
  ngOnInit() {
    this.currentUser
  }

  selectCat(selected:string){
    this.service.setSelectedCategory(selected);
  }

}
