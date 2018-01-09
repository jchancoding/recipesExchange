import { Component, OnInit } from '@angular/core';
import { SessionService} from '../session.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';

  constructor(private _route: Router, private _session: SessionService) { }

  ngOnInit() {
  }


  logUser(formdata: NgForm){
    this._session.setUser(this.username);
    this._route.navigateByUrl('all');
  }
}
