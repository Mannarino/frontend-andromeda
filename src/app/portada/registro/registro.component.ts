import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { CheckEmail } from 'src/app/interfaces/check-email';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  emailAvailable = false
  emailNotAvailable = false
  successRegisted = false
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    // start check available email
      this.email.valueChanges
      .pipe(
        debounceTime(2000)
      )
      .subscribe( (value) =>{
            console.log(value)
           this.usersService.checkEmail(value)
              .subscribe((value:CheckEmail) => {
                if(value.available){
                  this.emailAvailable=true
                }else {
                  this.emailNotAvailable =true
                }
              })
      })
    // end check available email
  }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  
  regist(){
    this.usersService.createUser(this.form.value)
    .subscribe( value => {
      this.form.reset()
      console.log( value)})
      this.successRegisted = true
      setTimeout(()=> this.successRegisted= false,3000)
  }

}
