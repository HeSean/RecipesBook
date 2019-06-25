import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipesList: Recipe[] = [
    new Recipe('burger', 'fucking delicious', 'https://tinyurl.com/ydhk33or'),
    new Recipe('burger', 'fucking delicious', 'https://tinyurl.com/ydhk33or'),
    new Recipe('burger', 'fucking delicious', 'https://tinyurl.com/ydhk33or'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
