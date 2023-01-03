import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './portada/login/login.component';
import { RegistroComponent } from './portada/registro/registro.component';
import { HomeComponent } from './pagesPriv/home/home.component';
import { FirstLevelGuard } from './guardianes/first-level.guard';
const routes: Routes = [
	{path:'',
	component:PortadaComponent,
	children:[
	    { path:'', component: LoginComponent},
		{ path:'login', component: LoginComponent},
		{ path:'regist', component: RegistroComponent}
	]},
	{path:'home',component:HomeComponent , canActivate: [FirstLevelGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
