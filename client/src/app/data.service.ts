import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  recipes: BehaviorSubject<any[]> = new BehaviorSubject([]);
  recipe = new BehaviorSubject([]);
  recipe_id;
  constructor(private _http: HttpClient) { }


  getAllRecipes() {
    this._http.get('/all').subscribe( 
      (response: any[]) => {
        this.recipes.next(response);
      }
    );
  }

  createRecipe(name) {
    console.log("HEREINSERVICE");
    return this._http.post('/newrecipe', name)
      //   .subscribe(
      //   (response: any) => {
      //     this.recipes.next(response);
      //   }
      // )
  }


  likeRecipe(recipe_id) {
    console.log(recipe_id);
    return this._http.put('/like/'+recipe_id, {responseType: 'text'});
  }

  getRecipeById(recipe_id) {
    return this._http.get('/recipes/' + recipe_id);
  }

  getAllIngredients(ing_array) {
    this._http.get('/all').subscribe(
      (response: any[]) => {
        this.recipes.next(response);
      }
    );
  }

    updateRecipe(recipeupdated, recipe_id){
      console.log(recipeupdated);
      console.log(recipe_id);
      //  this._http.post('/update/' + recipe_id, recipe);
     this._http.post('/update/'+recipe_id, recipeupdated).subscribe((data:any)=>{
       this.getRecipeById(data._id);
      
      })
        
      
    }


  }
    


   
    
  



