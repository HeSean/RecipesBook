import { Injectable, EventEmitter } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Ingredient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[];

  constructor(private recipeService: RecipesService) { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingridient: Ingredient) {
    this.ingredients.push(ingridient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingridients: Ingredient[]) {
    // ingridients.forEach(element => {
    //   this.addIngredient(element);
    // });
    this.ingredients.push(...ingridients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
