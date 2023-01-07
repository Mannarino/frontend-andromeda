import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(form){
    return this.http.post(`${environment.url_endpoint}/users/login`,form)
  }
  saveProfile(email,name){
    localStorage.setItem('ProfileName',name)
    localStorage.setItem('ProfileEmail',email)
  }
  getProfile(){
    const profile = {
      name : localStorage.getItem('ProfileName'),
      email : localStorage.getItem('ProfileEmail')
    }
    return profile
  }
  removeProfile(){
    localStorage.removeItem('ProfileName')
    localStorage.removeItem('ProfileEmail')
  }  
}
