import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Regist } from 'src/app/interfaces/regist';
import { UsersService } from 'src/app/services/users.service';
import { CheckEmail } from 'src/app/interfaces/check-email';
import { debounceTime } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  emailAvailable = false
  emailNotAvailable = false
  successRegisted = false
  serverInternalError=false
  showAvailableEmailMessage= false
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private usersService:UsersService,
              private loginService:LoginService,
              private router: Router,
              private handleTokens:HandleTokensService
    ) { }

  ngOnInit(): void {
    // start check available email
      this.email.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe( (value) =>{
            console.log(value)
          if (!/\S+@\S+\.\S+/.test(value)){
            this.showAvailableEmailMessage = false }
          if(/\S+@\S+\.\S+/.test(value)){
              this.usersService.checkEmail(value)
                            .subscribe((value:CheckEmail) => {
                              if(value.available){
                                this.showAvailableEmailMessage = true
                                this.emailAvailable=true
                              }else {
                                this.emailNotAvailable =true
                              }
                            })
          }
           
      })
    // end check available email
  }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  
  regist(){
    this.usersService.createUser(this.form.value)
    .subscribe( (value:Regist) => {
      this.form.reset()
      console.log( value)
      this.serverInternalError =false
      this.successRegisted = true
      setTimeout(()=> this.successRegisted= false,3000)
      this.handleTokens.saveToken(value.data.token)
        this.loginService.saveProfile(value.data.user.email,value.data.user.name,value.data.user.rol)
        this.router.navigate(['/home'] )
    },error=>{
      this.serverInternalError =true
      console.log('hubo un error')
    })  
  }

}
