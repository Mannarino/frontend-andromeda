import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './portada/login/login.component';
import { RegistroComponent } from './portada/registro/registro.component';
import { HomeComponent } from './pagesPriv/home/home.component';
const routes: Routes = [
	{path:'',
	component:PortadaComponent,
	children:[
	    { path:'', component: LoginComponent},
		{ path:'login', component: LoginComponent},
		{ path:'regist', component: RegistroComponent}
	]},
	{path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
