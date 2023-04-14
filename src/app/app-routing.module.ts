import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { PortadaComponent } from './pages-auth/portada.component';
import { LoginComponent } from './pages-auth/login/login.component';
import { RegistroComponent } from './pages-auth/registro/registro.component';
import { HomeComponent } from './pages-go-after-login/home/home.component';
import { ShowPeopleComponent } from './pages-go-after-login/home/show-people/show-people.component';

//guardianes
import { FirstLevelGuard } from './guardianes/first-level.guard';
import { ExitGuard } from './guardianes/exit.guard';
import { EditarComponent } from './pages-go-after-login/home/show-people/editar/editar.component';

const routes: Routes = [
	{path:'',
	component:PortadaComponent,
	children:[
	    { path:'', component: LoginComponent},
		{ path:'login', component: LoginComponent},
		{ path:'regist', component: RegistroComponent}
	]},
	{path:'home',component:HomeComponent , 
	canActivate: [FirstLevelGuard],
	canDeactivate: [ ExitGuard ],
	children:[
	    { path:'', component: ShowPeopleComponent},
		{ path:'editar/:id', component: EditarComponent}
	]},
	{path:'cms',
		loadChildren: () => import('./page-admin-cms/cms.module').then(m => m.CmsModule)      
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
