import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HandleTokensService } from './handle-tokens.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router, 
              private handleTokensService:HandleTokensService
    ) { }

  loginUser(form){
    console.log(environment.url_endpoint)
    return this.http.post(`${environment.url_endpoint}/users/login`,form)
  }
  saveProfile(email,name,membresia){
    localStorage.setItem('ProfileName',name)
    localStorage.setItem('ProfileEmail',email)
    localStorage.setItem('ProfileMembresia',membresia)
  }
  getProfile(){
    const profile = {
      name : localStorage.getItem('ProfileName'),
      email : localStorage.getItem('ProfileEmail'),
      membresia : localStorage.getItem('ProfileMembresia')
    }
    return profile
  }
  removeProfile(){
    localStorage.removeItem('ProfileName')
    localStorage.removeItem('ProfileEmail')
    localStorage.removeItem('ProfileMembresia')
  }  
  logout(){
    this.removeProfile()
    this.router.navigate(['/login'])
    this.handleTokensService.removeToken()
  }
}
