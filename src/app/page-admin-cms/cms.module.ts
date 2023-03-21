import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CmsRoutingModule } from './cms-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MenuSuperiorComponent } from './admin-home/components/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './admin-home/components/menu-lateral/menu-lateral.component';
import { AdministrarUsuariosComponent } from './admin-home/pages/administrar-usuarios/administrar-usuarios.component';

import { SharedModule } from '../shared-components/shared.module';
import { CrearComponent } from './admin-home/pages/administrar-people/crear.component';
import { EditarUsuariosComponent } from './admin-home/pages/administrar-usuarios/editar-usuarios.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [  AdminHomeComponent,
     MenuSuperiorComponent, MenuLateralComponent, AdministrarUsuariosComponent,
     EditarUsuariosComponent,
     CrearComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
   MatInputModule
  ],
  providers: [  
    MatDatepickerModule,  
    MatNativeDateModule
  ]
})
export class CmsModule { }
