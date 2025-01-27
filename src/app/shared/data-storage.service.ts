import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipesService: RecipesService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      'https://recipesbook-2d3f2.firebaseio.com/recipes.json',
      recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://recipesbook-2d3f2.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe, ingridients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }), tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
      );
  }
}
