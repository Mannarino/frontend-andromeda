import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //propiedades para el despliegue y control de la vista segun el tipo de usuario
  name =""
  InvitedUser=false
  membresia=""
  profile
  
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    //el if tiene la logica que el componente desplagara en caso que se entre como usuario invitado
     this.profile = this.loginService.getProfile()
     this.name = this.profile.name
     this.membresia = this.profile.membresia
     
    // console.log(this.profile) 
    
    // window.addEventListener('beforeunload', function() {
    //   localStorage.removeItem('enterLikeFreeUser');
    // });
  }
 
}
