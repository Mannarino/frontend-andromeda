import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CmsRoutingModule } from './cms-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MenuSuperiorComponent } from './admin-home/components/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './admin-home/components/menu-lateral/menu-lateral.component';
import { AdministrarUsuariosComponent } from './admin-home/pages/administrar-usuarios/administrar-usuarios.component';

import { SharedModuleModule } from '../shared-components/shared-module.module';
import { CrearComponent } from './admin-home/pages/people/crear.component';
import { EditarUsuariosComponent } from './admin-home/pages/administrar-usuarios/editar-usuarios.component';






@NgModule({
  declarations: [  AdminHomeComponent,
     MenuSuperiorComponent, MenuLateralComponent, AdministrarUsuariosComponent,
     EditarUsuariosComponent,
     CrearComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class CmsModule { }
