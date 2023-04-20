import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ComunicacionEntreHermanosService } from 'src/app/services/comunicacion-entre-hermanos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  userChangedValue: boolean = true;


  form = new FormGroup({
    buscador: new FormControl('',Validators.required),
    categorias: new FormControl('',[Validators.required, Validators.email]),
    viewAllowed: new FormControl('',[Validators.required, Validators.email]),
  });
  constructor(private comunicacionEntreHermanos:ComunicacionEntreHermanosService) { }

  ngOnInit(): void {
  this.form.get('categorias').valueChanges.subscribe((value) => {
    if (this.userChangedValue) {
      this.userChangedValue = false;
      this.form.get('viewAllowed').setValue('');
    } else {
      this.userChangedValue = true;
    }
      this.comunicacionEntreHermanos.enviarCategoria(value )  
      
    });
    this.form.get('viewAllowed').valueChanges.subscribe((value) => {
      if (this.userChangedValue) {
        this.userChangedValue = false;
        this.form.get('categorias').setValue('');
      } else {
        this.userChangedValue = true;
      }
      this.comunicacionEntreHermanos.enviarViewAllowed(value )   
      
    });

    this.form.get('buscador').valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe( (value) =>{
      this.comunicacionEntreHermanos.enviarBuscador(value ) 
    } )
  }
}
