import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  emailAvailable = false
  emailNotAvailable = false
  successRegisted = false
  showAvailableEmailMessage= false
  
  form = new FormGroup({
      name: new FormControl('',Validators.required),
      birthDay: new FormControl('',[Validators.required]),
      photo: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      viewAllowed: new FormControl('', Validators.required)
    });
  constructor(private dateAdapter: DateAdapter<Date> , private peopleService:PeopleService) { 
     this.dateAdapter.setLocale('es')
  }
 
  ngOnInit(): void {
    
  }
  get name() { return this.form.get('name'); }
  get birthDay() { return this.form.get('birthDay'); }
  get photo() { return this.form.get('photo'); }
  get category() { return this.form.get('category'); }
  
  createPerson(){
    console.log(this.form.value)
    // this.peopleService.createPerson(this.form.value)
    // .subscribe( (data)=>{ console.log(data)})
  }
}
