import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test.',
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'
    ),
    new Recipe(
      'Shahee Paneer',
      'This is a royal recipe made with curry, paneer and cashwe nuts.',
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
