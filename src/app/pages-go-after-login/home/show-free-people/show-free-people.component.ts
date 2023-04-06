import { Component, OnInit } from '@angular/core';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
import { LoginService } from 'src/app/services/login.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-show-free-people',
  templateUrl: './show-free-people.component.html',
  styleUrls: ['./show-free-people.component.css']
})
export class ShowFreePeopleComponent implements OnInit {
  people
  profile
  token
  constructor(private peopleService:PeopleService,
               private loginService:LoginService,
               private handleToken:HandleTokensService
    ) { }

  ngOnInit(): void {
    this.profile = this.loginService.getProfile()
    this.token= this.handleToken.getToken()
    this.getPeople(0,8,this.profile.membresia,this.token)
    
    console.log(this.profile.membresia)
  }
    getPeople(skip,limit,membresia,token){
      this.peopleService.getPeople(skip,limit,membresia,token)
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

    //este metodo recibe el outpu del componente hijo que es el paginator
    //con esa data recibe los valores de skip y limit para hacer un request indicando el limite y el salto
    getDataToPaginate(respuesta) {
      this.peopleService.getPeople(respuesta.skip,respuesta.limit,this.profile.membresia,this.token)
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
}
