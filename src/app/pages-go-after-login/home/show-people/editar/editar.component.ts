import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { HandleTokensService } from 'src/app/services/handle-tokens.service';
import { PeopleService } from 'src/app/services/people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  parametroDeRuta //recibe el id de la persona a editar
  token
  // variables to control error messages
  successRegisted = false
  serverInternalError=false
  /////////////////////
  showDatePickerOfPassAway = false
  defaultValueToYearPassAway = new Date("1000-01-01")
  // defaulfValueToYyearPassAway: the rest api expects that if the person has not died, 
  // this specific date is sent in this field yearPassAway
  AdminMembresia =""
  form = new FormGroup({
      name: new FormControl('',Validators.required),
      birthDay: new FormControl('',[Validators.required]),
      yearPassAway: new FormControl(this.defaultValueToYearPassAway),
      passAway: new FormControl(false),//It is necessary to add a default value to the checked control 
      //because if the user does not touch it, it is sent as an empty string and that gives an error 
      //in the rest api because it expects a boolean in this field
      photo: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      viewAllowed: new FormControl('', Validators.required)
    });
  
  // dateAdapter and dateAdapter.setLocale are 
  // to Data picker element from angular material
  constructor(private dateAdapter: DateAdapter<Date> ,
              private peopleService:PeopleService,
              private handleToken:HandleTokensService,
              private route: ActivatedRoute,
              private router: Router
              )
               { 
               this.dateAdapter.setLocale('es')
  }
 
  ngOnInit(): void {
    this.AdminMembresia = localStorage.getItem('ProfileMembresia')
    console.log(this.AdminMembresia)
    this.token= this.handleToken.getToken()
    // I listen to the changes of the checked passAway 
    // to enable the corresponding date picker
    this.form.get('passAway').valueChanges.subscribe(value=>{
      this.showDatePickerOfPassAway=value
    })

    this.route.params.subscribe(params => {
      this.parametroDeRuta = params['id'];
      console.log(this.parametroDeRuta)
      console.log(this.token)
      this.peopleService.getAPersonById(this.parametroDeRuta,this.token)
         .subscribe((value:Person )=> {console.log(value)
             this.form.get("name").setValue(value.name)
            this.form.get("birthDay").setValue(value.birthDay)
            this.form.get("yearPassAway").setValue(value.yearPassAway)
            this.form.get("passAway").setValue(value.passAway)
            this.form.get("photo").setValue(value.photo)
            this.form.get("viewAllowed").setValue(value.viewAllowed)
            this.form.get("category").setValue(value.category)
           },error=>{
            this.serverInternalError =true
            setTimeout(()=>this.serverInternalError = false ,3000)
            console.log('hubo un error' + error.message)
          })
      });
   }

  get name() { return this.form.get('name'); }
  get birthDay() { return this.form.get('birthDay'); }
  get photo() { return this.form.get('photo'); }
  get category() { return this.form.get('category'); }
  get viewAllowed() { return this.form.get('viewAllowed'); }

  editarPerson(){
    console.log(this.form.value)
    // I added these two validations so when the value in those fiels is  null so it will  never to be sent
    // since somehow even though angular added default values ​​sometimes null was sent
    if(this.form.get('yearPassAway').value===null){
      this.form.get('yearPassAway').setValue(this.defaultValueToYearPassAway)
    }
    if(this.form.get('passAway').value===null){
      this.form.get('passAway').setValue(false) 
    }

    // It is valid that in case the Pass Away option is chosen, a date is chosen, 
    // but if a date is not chosen so the form is not sent
    if(this.form.get('passAway').value===true&&!this.form.get('yearPassAway').value){
      alert('debe ingresar uan fecha')
      return false
    }else{

        this.peopleService.updatePersonById(this.parametroDeRuta,this.form.value,this.token)
        .subscribe( 
            (data)=>{          
                      this.form.reset()
                      console.log( data)
                      this.successRegisted = true
                      setTimeout(()=> this.successRegisted= false,3000)
                    }
                    ,error=>{
                      this.serverInternalError =true
                      setTimeout(()=>this.serverInternalError = false ,3000)
                      console.log('hubo un error' + error.message)
                    })
    
   
    }            
  }
}