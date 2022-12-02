import { LoginService } from './servicios/login.service';
import { LibroService } from './servicios/libro.service';
import { AutenticacionService } from './autentificacion/autentificacion.service';
import { FormularioLibroComponent } from './componentes/formularios/formulario-libro/formulario-libro.component';
import { FormularioAutorComponent } from './componentes/formularios/formulario-autor/formulario-autor.component';
import { AutorListarComponent } from './componentes/autores/autor-listar/autor-listar.component';
import { AutorCrearComponent } from './componentes/autores/autor-crear/autor-crear.component';
import { AutorActualizarComponent } from './componentes/autores/autor-actualizar/autor-actualizar.component';
import { LibroListarComponent } from './componentes/libros/libro-listar/libro-listar.component';
import { LibroCrearComponent } from './componentes/libros/libro-crear/libro-crear.component';
import { LibroActualizarComponent } from './componentes/libros/libro-actualizar/libro-actualizar.component';
import { AdministradorActualizarComponent } from './componentes/administrador/administrador-actualizar/administrador-actualizar.component';
import { FormularioLoginComponent } from './componentes/formularios/formulario-login/formulario-login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { LoginComponent } from './componentes/Login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { NoEncontradaComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AdministradorBuscarComponent } from './componentes/administrador/administrador-buscar/administrador-buscar.component';
import { TableModule } from 'primeng/table';
import { FormularioRegistroComponent } from './componentes/formularios/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EventoBuscarComponent } from './componentes/evento/evento-buscar/evento-buscar.component';
import { EventoListarComponent } from './componentes/evento/evento-listar/evento-listar.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview'
import { EstaLogeadoAdminGuard } from './autentificacion/esta-logeado-admin.guard';
import { EstaLogeadoUsuarioGuard } from './autentificacion/esta-logeado-usuario.guard';
import { AutorService } from './servicios/autor.service';
import { EventoService } from './servicios/evento.service';
import { UsuarioService } from './servicios/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoEncontradaComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent,
    AdministradorBuscarComponent,
    AdministradorActualizarComponent,
    RegistroComponent,
    EventoBuscarComponent,
    EventoListarComponent,
    LibroActualizarComponent,
    LibroCrearComponent,
    LibroListarComponent,
    AutorActualizarComponent,
    AutorCrearComponent,
    AutorListarComponent,
    FormularioAutorComponent,
    FormularioLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabViewModule
  ],
  providers: [
    AutorService,
    EventoService,
    LibroService,
    LoginService,
    UsuarioService,

    AutenticacionService,
    EstaLogeadoAdminGuard,
    EstaLogeadoUsuarioGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
