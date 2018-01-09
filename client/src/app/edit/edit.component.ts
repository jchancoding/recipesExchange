import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Recipe } from '../recipe';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  recipe;
  id;


  constructor(private _data: DataService, private _route: Router, private _actRoute: ActivatedRoute) {
    {
      this._actRoute.params.subscribe(params => {
        console.log(params) //log the entire params object
        console.log(params['id']) //log the value of id
        this.id = params['id'];
        
      });
      
      }

   }

  ngOnInit() {
    this.getRecipe();
    console.log(this.id);
    console.log(this.recipe);
   
  
 }


 getRecipe() {
  this._data.getRecipeById(this.id).subscribe(
    (response: any) => {
      this.recipe = response;
    }
  );
}

 



 onSubmit(formData: NgForm){
   var ingredient = {
     name: formData.value.ingredient,
     amount: formData.value.amount
  }
   console.log(ingredient.name);
   console.log(ingredient.amount);
   console.log(this.recipe);
   this.recipe._ingredients.push(ingredient);

   console.log(this.recipe);

   this._data.updateRecipe(this.recipe._ingredients, this.id); 
   formData.reset();
  }


 view_recipe(id){
    console.log(id);
    this._route.navigateByUrl('recipe/'+id);

 }

  
}
