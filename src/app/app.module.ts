import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared-components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { PaginationComponent } from './pages-go-after-login/home/show-people/pagination/pagination.component';
import { ShowPeopleComponent } from './pages-go-after-login/home/show-people/show-people.component';
import { AppComponent } from './app.component';
import { PortadaComponent } from './pages-auth/portada.component';
import { LoginComponent } from './pages-auth/login/login.component';
import { RegistroComponent } from './pages-auth/registro/registro.component';
import { HomeComponent } from './pages-go-after-login/home/home.component';
import { EditarComponent } from './pages-go-after-login/home/show-people/editar/editar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuscadorComponent } from './pages-go-after-login/home/buscador/buscador.component';
import { AdministrarPublicPeopleComponent } from './pages-go-after-login/home/administrar-public-people/administrar-public-people.component';


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ShowPeopleComponent,
    PaginationComponent,
    EditarComponent,
    BuscadorComponent,
    AdministrarPublicPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
   MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
