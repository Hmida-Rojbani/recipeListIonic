import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { FireRecipeService } from '../services/fire-recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Observable<Recipe[]>;
  constructor(private fireRecipe: FireRecipeService) { }

  ngOnInit() {
    this.recipes = this.fireRecipe.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.fireRecipe.getAllRecipes();
  }

}
