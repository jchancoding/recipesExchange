import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: 'new', pathMatch: "full", component: NewRecipeComponent}, 
{path: 'update/:id', pathMatch: "full", component: EditComponent}, 
{path: 'recipe/:id', component: ShowComponent}, 
{path: 'all', pathMatch: "full", component: ListComponent},
{path: '', pathMatch: "full", component: LoginComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }