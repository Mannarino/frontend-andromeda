import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  token
  // variables to control error messages
  successUpdate = false
  serverInternalError=false
  /////////////////////
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    _id: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  });
  constructor(private route: ActivatedRoute,
              private usersService:UsersService,
              private handleToken:HandleTokensService
              ) { }

  ngOnInit(): void {
    this.token= this.handleToken.getToken()
    this.route.queryParams.subscribe((params) => {
      // params is an object that represents the query parameters
      console.log(params['name']);
      // You can use the values of the query parameters as follows:
      this.form.get('email').setValue(params['email']) ;
      this.form.get('name').setValue(params['name']) ;
      this.form.get('rol').setValue(params['rol']) ;
      this.form.get('_id').setValue(params['_id']) ;
      // ...
    });
  
  }
  
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  update(){
    console.log(this.form.value)
    this.usersService.updateUser(this.form.value,this.form.get('_id').value,this.token)
    .subscribe( (value) => {
      console.log( value)
      this.serverInternalError =false
      this.successUpdate = true
      setTimeout(()=> this.successUpdate= false,3000)
      
    },error=>{
      this.serverInternalError =true
      console.log('hubo un error')
    })  
  }
}
