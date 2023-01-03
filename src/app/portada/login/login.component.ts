import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login.service';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoggedBadly= false
  serverInternalError=false
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private loginService:LoginService,
              private router: Router,
              private handleTokens:HandleTokensService) { }

  ngOnInit(): void {
  }
  
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  login(){
    this.loginService.loginUser(this.form.value)
    .subscribe( (value:Login) => {
      this.form.reset()
      console.log( value)
      if(value.logged){
        this.handleTokens.saveToken(value.token)
        this.router.navigate(['/home'], { queryParams: { email: value.email , name : value.name}} )
      }
      if(value.message=="error interno del servidor"){
        this.serverInternalError =true
      }
      if(!value.logged){
        this.LoggedBadly =true
      }
    })
  }
}
