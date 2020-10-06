import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipe } from '../models/recipe';
import { FireRecipeService } from '../services/fire-recipe.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {
  recipe = {} as Recipe ;
  constructor(private modalCtrl: ModalController,
              private fireRecipe: FireRecipeService) { }

  ngOnInit() {
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }


  submitToFireStore(){
    console.log('recipe', this.recipe);
    this.fireRecipe.addRecipe(this.recipe);
    this.dismissModal();
  }

}
