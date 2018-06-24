import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe [] = [
    new Recipe(
      'Hamburger', 
      'Meat and two buns', 
      'http://2wk128489wjq47m3kwxwe9hh.wpengine.netdna-cdn.com/wp-content/uploads/2017/08/burgers_main-bacon-cheeseburger-hamburger-stand.jpg',
      [
        new Ingredient('Ground beef', 1),
        new Ingredient('Bun', 1)
      ]),
    new Recipe(
      'Pizza', 
      'Triangle-shaped food', 
      'http://innovationspto.org/wp-content/uploads/2015/11/onecheesepizza.jpg', 
      [
        new Ingredient('cheese', 1),
        new Ingredient('pepperoni', 1)
      ]),
    new Recipe(
      'Coffee', 
      'Strong black drink', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG', 
      [
        new Ingredient('coffee', 2),
        new Ingredient('butter', 1),
        new Ingredient('coconut oil', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}

// private means can't be directly accessed from outside
// when we DO access it with getRecipes() we return a slice, a copy, and the array itself is untouched
