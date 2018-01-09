import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
 
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
   //this._data.recipe.subscribe(
    //  (data) => {
    //    this.recipe = data;
    //   }
   // )
    this.getRecipe();
}
 
  getRecipe() {
    this._data.getRecipeById(this.id).subscribe(
      (response: any) => {
        this.recipe = response;
      }
    );
  }
 
 
  edit_recipe(){
    this._route.navigateByUrl('update/' + this.id);
  }
 
  list(){
    this._route.navigateByUrl('all');
  }
 
 
 
 
}