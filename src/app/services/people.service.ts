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
    return this.http.get(`${environment.url_endpoint}/people/gold/${id}`,{ headers })
  }
  getPeople(skip=0,limit=0,membresia="",token="",category,viewAllowed,buscador){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    if(membresia===""||membresia==='platino'||membresia==='free'){
      if(category){
        return this.http.get(`${environment.url_endpoint}/people/free-and-platino?skip=${skip}&limit=${limit}&category=${category}`)
      }
      if(viewAllowed){
        return this.http.get(`${environment.url_endpoint}/people/free-and-platino?skip=${skip}&limit=${limit}&viewAllowed=${viewAllowed}`)
      }
      if(buscador){
        return this.http.get(`${environment.url_endpoint}/people/free-and-platino?skip=${skip}&limit=${limit}&buscador=${buscador}`)
      }
      return this.http.get(`${environment.url_endpoint}/people/free-and-platino?skip=${skip}&limit=${limit}`)
      
      
    }
    if(membresia==='gold'){
      if(category){
        return this.http.get(`${environment.url_endpoint}/people/gold?skip=${skip}&limit=${limit}&category=${category}`,{ headers })
      }
      if(viewAllowed){
        return this.http.get(`${environment.url_endpoint}/people/gold?skip=${skip}&limit=${limit}&viewAllowed=${viewAllowed}`,{ headers })
      }
      if(buscador){
        return this.http.get(`${environment.url_endpoint}/people/gold?skip=${skip}&limit=${limit}&buscador=${buscador}`,{ headers })
      }
      return this.http.get(`${environment.url_endpoint}/people/gold?skip=${skip}&limit=${limit}`,{ headers })
    }
  }
  getCountFreeAndPlatinoPeople(){
    return this.http.get(`${environment.url_endpoint}/people/free-and-platino?count=true`)
  }
  getCountByCategoryFreeAndPlatinoPeople(category){
    return this.http.get(`${environment.url_endpoint}/people/free-and-platino?count=true&category=${category}`)
  }
  getCountByViewAllowedFreeAndPlatinoPeople(viewAllowed){
    return this.http.get(`${environment.url_endpoint}/people/free-and-platino?count=true&viewAllowed=${viewAllowed}`)
  }
  getCountGoldPeople(token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/people/gold?count=true`)
  }
}
