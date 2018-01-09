import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  constructor(private _session: SessionService, private _route: Router) { }

  ngOnInit() {
    this.user = this._session.username;
  }

  logout(){
    this._route.navigateByUrl('');
}

}
