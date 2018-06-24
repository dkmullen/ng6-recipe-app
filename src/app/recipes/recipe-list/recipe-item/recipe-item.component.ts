import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number; // Listen for index num from rec-list.component

  // Inject the service...
  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // When this function is called, we ask rec..Selected in the recipe.service to emit the selected recipe  
  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
