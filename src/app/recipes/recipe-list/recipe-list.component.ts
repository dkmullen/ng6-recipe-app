import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  // Here is where we inject the service  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // This is where we fetch the array of recipes from the service
    this.recipes = this.recipeService.getRecipes();
  }

}
