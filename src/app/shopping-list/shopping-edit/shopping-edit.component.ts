import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent  {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


  constructor(private shoppinglistService: ShoppingListService) { }



  addItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);
    this.shoppinglistService.addIngredient(newIngredient);
  }
}
