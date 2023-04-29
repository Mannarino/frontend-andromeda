import { Component, OnInit } from '@angular/core';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
import { LoginService } from 'src/app/services/login.service';
import { PeopleService } from 'src/app/services/people.service';
import { NumeroPeople } from 'src/app/interfaces/numero-people';
import { ComunicacionEntreHermanosService } from 'src/app/services/comunicacion-entre-hermanos.service';



declare let alertify:any

@Component({
  selector: 'app-administrar-public-people',
  templateUrl: './administrar-public-people.component.html',
  styleUrls: ['./administrar-public-people.component.css']
})
export class AdministrarPublicPeopleComponent implements OnInit {
  people
  profile
  token
  numeroDePeopleEnLaApiRest 
  category
  buscador
  constructor(private peopleService:PeopleService,
               private loginService:LoginService,
               private handleToken:HandleTokensService,
               private comunicacionEntreHermanos:ComunicacionEntreHermanosService
    ) { }
    
  ngOnInit(): void {
    this.profile = this.loginService.getProfile()
    this.token= this.handleToken.getToken()
    this.getPeople(0,8,'platino',this.token,this.category,this.buscador)
    this.obtenerCantidadElementosEnLaApi()
    console.log(this.profile.membresia)

    this.comunicacionEntreHermanos.categoria$.subscribe( category =>{
      this.category =category
      this.peopleService.getCountByCategoryPublicPeople(this.category)
      .subscribe((data:NumeroPeople) =>{
        this.numeroDePeopleEnLaApiRest= data.numero
      })
    
      this.getPeople(0,8,'platino',this.token,this.category,"")
    })

   

    this.comunicacionEntreHermanos.buscador$.subscribe( buscador =>{
      this.buscador = buscador
      this.category=''
     
      this.getPeople(0,8,'platino',this.token,"",buscador)
    })
  }
  // array = []
  // buscar(data){   este codigo es si haria la busqueda desde javascript en el navegador desde
                  // una propiedad que contenga el arra con todos los daots
  //   console.log(data)
  //   console.log(this.people)
  //   if (this.people !== undefined) {
  //   this.array = this.people.filter(persona => persona.category == 'man');
  //   console.log(this.array)
  //   this.people = this.array
  //   }
  // }


    getPeople(skip,limit,membresia,token,category,buscador){
      this.peopleService.getPeople(skip,limit,'platino',token,category,buscador)
      .subscribe(
        (data)=>{
          console.log(data)
          this.people = data
          console.log(this.people)
          
        },
        (error)=>{
          console.log(error)
        }
      )
    }
    
    //este metodo recibe el outpu del componente hijo que es el paginator
    //con esa data recibe los valores de skip y limit para hacer un request indicando el limite y el salto
    getDataToPaginate(respuesta) {
      this.peopleService.getPeople(respuesta.skip,respuesta.limit,'platino',this.token,this.category,this.buscador)
      .subscribe(
        (data)=>{
          this.people = data
          console.log(this.people)
        },
        (error)=>{
          console.log(error)
        }
      )
     }

     getClass(category): string {
      switch (category) {
        case 'free':
          return 'text-bg-success';
        case 'platino':
          return 'text-bg-info';
        case 'gold':
          return 'text-bg-warning';
      }
    } 
    obtenerCantidadElementosEnLaApi(){
      
        this.peopleService.getCountPublicPeople()
        .subscribe((data:NumeroPeople) =>{
          console.log(data.numero)
          this.numeroDePeopleEnLaApiRest= data.numero
          console.log(this.numeroDePeopleEnLaApiRest)
        })
     
    }

    eliminarPersona(id){
      /*
      * @title {String or DOMElement} The dialog title.
      * @message {String or DOMElement} The dialog contents.
      * @onok {Function} Invoked when the user clicks OK button.
      * @oncancel {Function} Invoked when the user clicks Cancel button or closes the dialog.
      *
      * alertify.confirm(title, message, onok, oncancel);
      *
      */
      alertify.confirm('eliminar persona', 'estas seguro que quieres eliminar esta persona?', ()=>{ 
        console.log(this.people)
        let index = this.people.findIndex(item => item._id === id);   
        this.peopleService.deletePersonPublicById(id,this.token)
        .subscribe( 
            (data)=>{          
               this.people.splice(index, 1);  
               alertify.success('se elimino')           
                    }
            ,error=>{
                      console.log('hubo un error' + error.message)
                      alertify.error('hubo un error en operacion de eliminacion')
                    })
      }
      , function(){})
      .set({labels:{ok:'Aceptar', cancel: 'Cancelar'}}); 
    }

    comprobarMembresia(){
      if(this.profile.membresia==='gold'){
        return false
      }
      else{
        return true
      }
    }
 
}