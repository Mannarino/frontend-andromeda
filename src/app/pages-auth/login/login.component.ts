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
  imgCargando = false 
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private loginService:LoginService,
              private router: Router,
              private handleTokens:HandleTokensService) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  login(){
    this.LoggedBadly= false
    this.serverInternalError=false
    this.imgCargando = true
    //console.log(this.form.value)
    if(!this.form.valid){return console.log('not valid form')}
    this.loginService.loginUser(this.form.value)
    .subscribe( (value:Login) => {
      this.form.reset()
      //console.log( value)
      //console.log( value.operation.login)
      this.imgCargando = false
      if(value.operation.login){
        this.handleTokens.saveToken(value.data.token)
        this.loginService.saveProfile(value.data.user.email,value.data.user.name,value.data.user.rol)
        this.router.navigate(['/home'] )
      }
    },error=>{
      this.imgCargando = false
      console.log(error.status)
      if(error.status===500){
        this.LoggedBadly =true
      }
      if(error.status===0){
        this.serverInternalError =true
      }
      console.log('hubo un error')
    })  
  }
  //este metodo es para lo usuarios que entrar como invitados, sin registrarse
  entrarSinRegistro(){
    this.loginService.saveProfile("free","free","free")
    this.router.navigate(['/home'] )
  }


  //method called when user press enter key------
  enterEvent() {
    this.login() 
  }
  //En la vista en el input password esta la escucha de este evento (keydown.enter)="enterEvent()"
  //---------------------------------------------
}
