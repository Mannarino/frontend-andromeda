import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';


@Injectable()
export class ManejoErrorTokenExpiradoInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejar el error aquí
        if(error.error.message=='El token ha expirado'){
          alert('El token ha expirado debe volver a logearse para obtener un nuevo token ')
          this.loginService.logout()
        }
        console.log(error);
        return throwError(error);;})
        );
  }
}
