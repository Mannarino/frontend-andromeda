import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdministrarUsuariosComponent } from './admin-home/pages/administrar-usuarios/administrar-usuarios.component';


const routes: Routes = [
  {path:'', component :AdminHomeComponent,
  children:[
   {path:'admin-users', component :AdministrarUsuariosComponent}
  
]},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }