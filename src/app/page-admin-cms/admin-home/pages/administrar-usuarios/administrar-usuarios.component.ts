import { Component, OnInit } from '@angular/core';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
import { UsersService } from 'src/app/services/users.service';

declare let alertify:any

@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.component.html',
  styleUrls: ['./administrar-usuarios.component.css']
})
export class AdministrarUsuariosComponent implements OnInit {
  token
  usuarios
  constructor( private userService : UsersService,
               private handleToken:HandleTokensService
    ) { }

  ngOnInit(): void {
    this.token= this.handleToken.getToken()
    this.userService.getAllUser(this.token)
    .subscribe(value =>{
      this.usuarios = value
      console.log(this.usuarios)
    } )
  }
  eliminar(id){
    alertify.confirm('eliminar persona', 'estas seguro que quieres eliminar esta persona?', ()=>{ 
      
      let index = this.usuarios.findIndex(item => item._id === id);   
       this.userService.deleteUser(id,this.token)  
      .subscribe( 
          (data)=>{          
             this.usuarios.splice(index, 1);  
             alertify.success('se elimino')  
             console.log(data)         
                  }
          ,error=>{
                    console.log('hubo un error' + error.message)
                    alertify.error('hubo un error en operacion de eliminacion')
                  })
    }
    , function(){})
    .set({labels:{ok:'Aceptar', cancel: 'Cancelar'}}); 
  }
}
