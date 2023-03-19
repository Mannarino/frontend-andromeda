import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  profile = {name:"",email:"",membresia:""}
  constructor(private loginService:LoginService,
              private router: Router, 
              private handleTokensService:HandleTokensService) { }

  ngOnInit(): void {
    this.profile= this.loginService.getProfile()
  }
  makeLogout(){
    this.loginService.removeProfile()
    this.router.navigate(['/login'])
    this.handleTokensService.removeToken()
  }
}
