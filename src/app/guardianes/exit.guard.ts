import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component:'unkwon',
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const url = nextState.url;
    
      // Comparar la URL de la ruta de destino con la ruta permitida
      if (url === '/login' || url === '/') {
        // Impedir la navegación 
        return false;
      } else {
        
        return true;
      }  
   
   
      
  }
  
}
