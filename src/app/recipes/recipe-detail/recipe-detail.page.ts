import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from 'src/app/models/recipe';
import { FireRecipeService } from 'src/app/services/fire-recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe = null;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fireRecipe: FireRecipeService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
      }
      const recipeId = paramMap.get('recipeId');
      this.fireRecipe.getRecipe(recipeId).subscribe(data => {
        this.loadedRecipe = data;
        console.log('loaded recipe', this.loadedRecipe);
      });
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are you sure ?',
      message: 'Do you really want to delete this recipe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.fireRecipe.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertElt => {
      alertElt.present();
    });
  }

}
