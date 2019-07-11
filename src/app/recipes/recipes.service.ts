import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'fucking delicious',
      'https://tinyurl.com/ydhk33or',
      [new Ingredient('Burger', 1),
      new Ingredient('Buns', 2),
      new Ingredient('French fries', 123091823)]
    ),
    new Recipe(
      'Burger',
      'fucking delicious',
      'https://tinyurl.com/ydhk33or',
      [new Ingredient('Burger', 1),
      new Ingredient('Bun', 2),
      new Ingredient('French fries', 123091823)]
    ), new Recipe(
      'Burger',
      'fucking delicious',
      'https://tinyurl.com/ydhk33or',
      [new Ingredient('Burger', 1),
      new Ingredient('Bun', 2),
      new Ingredient('French fries', 123091823)]
    ),];


  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    console.log('returning array of recipes');
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }



}
