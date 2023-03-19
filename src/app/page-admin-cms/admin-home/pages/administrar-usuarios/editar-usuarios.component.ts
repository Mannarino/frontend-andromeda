import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  successRegisted = false
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    _id: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  });
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
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
    
  }
}
