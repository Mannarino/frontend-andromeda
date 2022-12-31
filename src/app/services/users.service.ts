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
}
