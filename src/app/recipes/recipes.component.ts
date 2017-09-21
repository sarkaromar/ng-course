import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {

  // recieved data from recipe model and store this data on selectedRecipe var
  /* selectedRecipe: Recipe; */
  constructor() { }

  ngOnInit() {

  }

}
