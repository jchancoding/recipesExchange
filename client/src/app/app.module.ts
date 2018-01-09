import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { SessionService } from './session.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ShowComponent,
    EditComponent,
    NewRecipeComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
