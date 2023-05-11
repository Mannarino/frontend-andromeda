import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  checkEmail(email){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('email', email);
    return this.http.get(`${environment.url_endpoint}/users/checkEmailAvailable`,{ headers })
  }
  createUser(form){
    return this.http.post(`${environment.url_endpoint}/users/regist`,form)
  }
  getAllUser(token){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/users/`,{ headers })
  }
  updateUser(form,id,token){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${environment.url_endpoint}/users/${id}`,form,{ headers })
  }
  deleteUser(id,token){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.delete(`${environment.url_endpoint}/users/${id}`,{ headers })
  }
}
