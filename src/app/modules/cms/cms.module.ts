import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CmsRoutingModule } from './cms-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MenuSuperiorComponent } from './admin-home/components/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './admin-home/components/menu-lateral/menu-lateral.component';
import { AdministrarUsuariosComponent } from './admin-home/pages/administrar-usuarios/administrar-usuarios.component';
import { EditarUsuariosComponent } from './admin-home/pages/editar-usuarios/editar-usuarios.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';






@NgModule({
  declarations: [  AdminHomeComponent,
     MenuSuperiorComponent, MenuLateralComponent, AdministrarUsuariosComponent,
     EditarUsuariosComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class CmsModule { }
