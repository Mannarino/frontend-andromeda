import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HandleTokensService } from '../services/handle-tokens.service';
@Injectable({
  providedIn: 'root'
})
export class FirstLevelGuard implements CanActivate {
  
  constructor(private handletokenService:HandleTokensService,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.handletokenService.getToken()){
      return true
    }else{
      alert("not, u can't go there")
      this.router.navigate(['/login'])
      return false;
    }
      
  }
  
}
