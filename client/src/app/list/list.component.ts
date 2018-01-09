import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes_list;
  recipe;
  user;
  constructor(private _data: DataService, private _route: Router, private _session: SessionService) { }

  ngOnInit() {
    this.user = this._session.username;
    this._data.recipes.subscribe((data) => { this.recipes_list = data; }
    );
    this._data.getAllRecipes();
  }

  goto_recipe(id){
    this._route.navigateByUrl('/recipe/'+id);
  }


  like_recipe(id) {
    console.log(id);
    this._data.likeRecipe(id).subscribe(
      (response) => {
        this._data.getAllRecipes();
      }
    );
  
  }





  new_recipe(){
    this._route.navigateByUrl('new');
}


}