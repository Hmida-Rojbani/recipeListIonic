import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AddPagePage } from '../add-page/add-page.page';
import { Recipe } from '../models/recipe';
import { FireRecipeService } from '../services/fire-recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Observable<Recipe[]>;
  constructor(private fireRecipe: FireRecipeService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.recipes = this.fireRecipe.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.fireRecipe.getAllRecipes();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AddPagePage
    });
    return await modal.present();
  }

  

}
