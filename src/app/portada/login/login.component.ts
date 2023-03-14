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
    this.LoggedBadly= false
    this.serverInternalError=false
    //console.log(this.form.value)
    this.loginService.loginUser(this.form.value)
    .subscribe( (value:Login) => {
      this.form.reset()
      //console.log( value)
      //console.log( value.operation.login)
      if(value.operation.login){
        this.handleTokens.saveToken(value.data.token)
        this.loginService.saveProfile(value.data.user.email,value.data.user.name,value.data.user.rol)
        this.router.navigate(['/home'] )
      }
      if(value.message=="error interno del servidor"){
        
      }
      
    },error=>{
      console.log(error.status)
      if(error.status===500){
        this.LoggedBadly =true
      }
      if(error.status===0){
        this.serverInternalError =true
      }
      console.log()
      console.log('hubo un error')
    })
    
  }
}
