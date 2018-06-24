import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  // Injection - ShoppingListService is provided in app.module, ie, the top of the hierarchy
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // set ingredients to whatever the service returns
    this.ingredients = this.slService.getIngredients();
    // and subscribe to the event emitterin shopping-list.service so we can update display on change
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

}