import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionEntreHermanosService {

  //creo un observable
  private categoriaSource = new BehaviorSubject<string>('');
  categoria$ = this.categoriaSource.asObservable();
  //////////////////

  //creo un metodo que al llamarse enviara un valor al observable y desde
  //el observable a los que esten suscriptos a el
  enviarCategoria(mensaje: string) {
    this.categoriaSource.next(mensaje);
  }
  /////////////////////////////


 

  //creo un observable
  private buscadorSource = new BehaviorSubject<string>('');
  buscador$ = this.buscadorSource.asObservable();
  //////////////////
//creo un metodo que al llamarse enviara un valor al observable y desde
  //el observable a los que esten suscriptos a el
  enviarBuscador(mensaje: string) {
    this.buscadorSource.next(mensaje);
  }
  /////////////////////////////
  constructor() { }
}
