import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MenuSuperiorComponent } from './admin-home/components/menu-superior/menu-superior.component';
import { MenuLateralComponent } from './admin-home/components/menu-lateral/menu-lateral.component';
import { AdministrarUsuariosComponent } from './admin-home/pages/administrar-usuarios/administrar-usuarios.component';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [  AdminHomeComponent, MenuSuperiorComponent, MenuLateralComponent, AdministrarUsuariosComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ],
  providers: [UsersService]
})
export class CmsModule { }
