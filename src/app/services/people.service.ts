import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComunicacionEntreHermanosService } from './comunicacion-entre-hermanos.service';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, 
              private comunicacionEntreHermanos:ComunicacionEntreHermanosService
    ) { }

  createPersonListPublic(person){
    return this.http.post(`${environment.url_endpoint}/people/public`,person)
  }
  createPersonListPrivate(person,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${environment.url_endpoint}/people-private`,person,{ headers })
  }


  updatePersonPublicById(id,person,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${environment.url_endpoint}/people/public/${id}`,person,{ headers })
  }
  updatePersonPrivateById(id,person,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${environment.url_endpoint}/people-private/${id}`,person,{ headers })
  }


  deletePersonPrivateById(id,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${environment.url_endpoint}/people-private/${id}`,{ headers })
  }
  deletePersonPublicById(id,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${environment.url_endpoint}/people/public/${id}`,{ headers })
  }


  getAPersonPublicById(id,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/people/public/${id}`,{ headers })
  }
  getAPersonPrivateById(id,token=""){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/people-private/${id}`,{ headers })
  }


  getPeople(skip=0,limit=0,membresia="",token="",category,buscador){
    if (limit <= 0) {
      throw new Error('El valor de "limit" debe ser mayor que cero');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    if(membresia===""||membresia==='platino'||membresia==='free'){
      this.comunicacionEntreHermanos.enviarTipoDeLista('Public')
      if(category){
        return this.http.get(`${environment.url_endpoint}/people/public?skip=${skip}&limit=${limit}&category=${category}`)
      }
      
      if(buscador){
        return this.http.get(`${environment.url_endpoint}/people/public?skip=${skip}&limit=${limit}&buscador=${buscador}`)
      }
      return this.http.get(`${environment.url_endpoint}/people/public?skip=${skip}&limit=${limit}`)
      
      
    }
    if(membresia==='gold'){
      this.comunicacionEntreHermanos.enviarTipoDeLista('Private')
      if(category){
        return this.http.get(`${environment.url_endpoint}/people-private?skip=${skip}&limit=${limit}&category=${category}`,{ headers })
      }
   
      if(buscador){
        return this.http.get(`${environment.url_endpoint}/people-private?skip=${skip}&limit=${limit}&buscador=${buscador}`,{ headers })
      }
      return this.http.get(`${environment.url_endpoint}/people-private?skip=${skip}&limit=${limit}`,{ headers })
    }
  }


  getCountPublicPeople(){
    console.log('se consulto desde el platno')
    return this.http.get(`${environment.url_endpoint}/people/public?count=true`)
  }
  getCountByCategoryPublicPeople(category){
    return this.http.get(`${environment.url_endpoint}/people/public?count=true&category=${category}`)
  }
 
  getCountPrivatePeople(token){
    console.log('inicio request de count private people ')
    console.log('se consulto desde el servicio people y el metodo getCountPrivatePeople')
    console.log(`${environment.url_endpoint}/people-private?count=true`)
    console.log('fin request de count private people')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${environment.url_endpoint}/people-private?count=true`)
  }
}
