import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTokensService {

  constructor() { }

  saveToken(token:string){
    localStorage.setItem('Token',token)
  }
  getToken(){
    return localStorage.getItem('Token')
  }
  removeToken(){
    localStorage.removeItem('Token')
  }  
  
}
