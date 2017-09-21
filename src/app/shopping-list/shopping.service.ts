import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 15),
        new Ingredient('Tomatoes', 10)
      ];
    getIngredient(){
        return this.ingredients.slice();
    }
    getIngredients(index: number){
        return this.ingredients[index]
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }
    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChange.next(this.ingredients.slice());
    }
    deleteIngredien(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChange.next(this.ingredients.slice());
    }
}