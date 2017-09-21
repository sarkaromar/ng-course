import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping.service';

@Injectable()
export class RecipeService{
    /* recipeSelected = new EventEmitter<Recipe>(); */
    private recipes: Recipe[] = [
        new Recipe(
            'Test name', 
            'test dexcription', 
            'http://lorempixel.com/400/400/food/',
        [
            new Ingredient('hmm', 5),
            new Ingredient('hmmm', 2)
        ]),
        new Recipe(
            'Test name2', 
            'test dexcription', 
            'http://lorempixel.com/400/400/sports/',
        [new Ingredient('bangla', 55)])
    ];
    constructor(private slService: ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}