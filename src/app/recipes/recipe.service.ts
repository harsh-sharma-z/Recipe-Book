import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test.',
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'
    ),
    new Recipe(
      'Shahee Paneer',
      'This is a royal recipe made with curry, paneer and cashew nuts.',
      'https://t3.ftcdn.net/jpg/02/28/28/22/360_F_228282257_CmwCG8Gxt0mOypQJ9UdflnXba5JJth2v.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}
