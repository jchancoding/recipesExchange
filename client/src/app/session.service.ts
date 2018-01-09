import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  
  username;

  constructor() { }

  setUser(name){
    this.username = name;

  }
  

}
