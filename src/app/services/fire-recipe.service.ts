import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';


@Injectable({
  providedIn: 'root'
})
export class FireRecipeService {
  private recipes: Observable<Recipe[]>;
  private recipeCollection: AngularFirestoreCollection<Recipe>;

  constructor(private afs: AngularFirestore) {
    this.recipeCollection = this.afs.collection<Recipe>('recipes');
    this.recipes = this.recipeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getAllRecipes() {
    return this.recipes;
  }

  getRecipe(recipeId: string){
    return this.recipeCollection.doc(recipeId).snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as any;
        const id = a.payload.id;
        return { id, ...data } as Recipe;
      })
    );
  }

  updateRecipe(recipeId: string, recipe: Recipe){
    return this.recipeCollection.doc(recipeId).update(recipe);
  }

  deleteRecipe(recipeId: string){
    return this.recipeCollection.doc(recipeId).delete();
  }

}
