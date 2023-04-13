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


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ShowPeopleComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
