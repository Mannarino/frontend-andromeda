import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

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
}
