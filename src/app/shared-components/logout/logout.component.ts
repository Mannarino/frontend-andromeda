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
  
  state= ""
  ngOnInit(): void {
    this.profile= this.loginService.getProfile()
    this.state=this.profile.membresia
  }
  makeLogout(){
    this.loginService.removeProfile()
    this.router.navigate(['/login'])
    this.handleTokensService.removeToken()
  }

  getClass(): string {
    switch (this.state) {
      case 'free':
        return 'text-bg-success';
      case 'platino':
        return 'text-bg-info';
      case 'gold':
        return 'text-bg-warning';
    }
  }
}
