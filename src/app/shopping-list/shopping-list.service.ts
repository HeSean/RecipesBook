import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('meat', 5)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingridient: Ingredient) {
    this.ingredients.push(ingridient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingridients: Ingredient[]) {
    // ingridients.forEach(element => {
    //   this.addIngredient(element);
    // });
    this.ingredients.push(...ingridients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next((this.ingredients.slice()));
  }
}
