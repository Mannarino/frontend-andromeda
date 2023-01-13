import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.component.html',
  styleUrls: ['./administrar-usuarios.component.css']
})
export class AdministrarUsuariosComponent implements OnInit {
  usuarios
  constructor( private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUser()
    .subscribe(value =>{
      this.usuarios = value
      console.log(this.usuarios)
    } )
  }

}
