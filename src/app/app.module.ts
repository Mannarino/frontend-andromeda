import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './portada/login/login.component';
import { RegistroComponent } from './portada/registro/registro.component';
import { HomeComponent } from './pagesPriv/home/home.component';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';


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
