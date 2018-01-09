import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { SessionService } from '../session.service';




@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})

export class NewRecipeComponent implements OnInit {
  recipe = new Recipe();
  user;

  
  constructor(private _data: DataService, private _route: Router, private _session: SessionService) { }

  ngOnInit() {
    this.user = this._session.username;
  }

  onSubmit(formData: NgForm) {
    console.log(this.recipe.name);
    this.recipe.chef = this.user;
    this._data.createRecipe(this.recipe).subscribe((response:any)=> {
      console.log('before navigate by')
      console.log(response._id);
      this.recipe=response;
      this._data.recipe.next(response);
      this._data.recipe_id = this.recipe._id;
        this._route.navigateByUrl('/update/' + this.recipe._id);
    })
  }

}
