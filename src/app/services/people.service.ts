import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  createPerson(person){
    return this.http.post(`${environment.url_endpoint}/people/free-and-platino`,person)
  }
  createPersonGoldenAdmin(person,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${environment.url_endpoint}/people/gold`,person,{ headers })
  }
  updatePersonById(id,person,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${environment.url_endpoint}/people/gold/${id}`,person,{ headers })
  }
  deletePersonById(id,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${environment.url_endpoint}/people/gold/${id}`,{ headers })
  }
  getAPersonById(id,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${environment.url_endpoint}/people/gold/${id}`,{ headers })
  }
  getPeople(skip=0,limit=0,membresia="",token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    if(membresia===""||membresia==='platino'||membresia==='free'){
      return this.http.get(`${environment.url_endpoint}/people/free-and-platino?skip=${skip}&limit=${limit}`)
    }
    if(membresia==='gold'){
       return this.http.get(`${environment.url_endpoint}/people/gold?skip=${skip}&limit=${limit}`,{ headers })
    }
  }
  getCountFreeAndPlatinoPeople(token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/people/free-and-platino?count=true`)
  }
  getCountGoldPeople(token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/people/gold?count=true`)
  }
}
