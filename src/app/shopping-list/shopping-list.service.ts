import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // add new ingredient to the array
    this.ingredients.push(ingredient);
    // emit the newly updated list (a copy of it) so other modules can pick it up
    // this emitter is subscribed to in shoping-list-edit.component
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // ES6 spread operator changes an array into a list and each item can then be pushed.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() { }

}

// shopping list service is provided in app.module, the top of the hierarchy, and so is available app wide