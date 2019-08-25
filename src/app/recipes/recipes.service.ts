import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Burger',
  //     'fucking delicious',
  //     'https://tinyurl.com/ydhk33or',
  //     [new Ingredient('Burger', 1),
  //     new Ingredient('Buns', 2),
  //     new Ingredient('French fries', 123091823)]
  //   ),
  //   new Recipe(
  //     'Burger',
  //     'fucking delicious',
  //     'https://tinyurl.com/ydhk33or',
  //     [new Ingredient('Burger', 1),
  //     new Ingredient('Bun', 2),
  //     new Ingredient('French fries', 123091823)]
  //   ), new Recipe(
  //     'Burger',
  //     'fucking delicious',
  //     'https://tinyurl.com/ydhk33or',
  //     [new Ingredient('Burger', 1),
  //     new Ingredient('Bun', 2),
  //     new Ingredient('French fries', 123091823)]
  //   ),];

  private recipes: Recipe[] = [];


  constructor(private shoppingListService: ShoppingListService) { }



  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    console.log('returning array of recipes');
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }



}
