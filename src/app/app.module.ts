import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './pages-auth/portada.component';
import { LoginComponent } from './pages-auth/login/login.component';
import { RegistroComponent } from './pages-auth/registro/registro.component';
import { HomeComponent } from './pages-go-after-login/home/home.component';
import { SharedModuleModule } from './shared-components/shared-module.module';


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
