import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Paneer', 5),
    new Ingredient('Tomatos', 6),
    new Ingredient('Onions', 3),
  ];

  constructor() {}

  ngOnInit() {}
}
