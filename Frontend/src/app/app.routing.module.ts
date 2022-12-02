import { LibroListarComponent } from './componentes/libros/libro-listar/libro-listar.component';
import { AutorListarComponent } from './componentes/autores/autor-listar/autor-listar.component';
import { AutorActualizarComponent } from './componentes/autores/autor-actualizar/autor-actualizar.component';
import { AutorCrearComponent } from './componentes/autores/autor-crear/autor-crear.component';
import { EventoListarComponent } from './componentes/evento/evento-listar/evento-listar.component';
import { EventoBuscarComponent } from './componentes/evento/evento-buscar/evento-buscar.component';
import { AdministradorActualizarComponent } from './componentes/administrador/administrador-actualizar/administrador-actualizar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NoEncontradaComponent } from './componentes/no-encontrado/no-encontrado.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./componentes/Login/login.component";
import { AdministradorBuscarComponent } from './componentes/administrador/administrador-buscar/administrador-buscar.component';
import { LibroCrearComponent } from './componentes/libros/libro-crear/libro-crear.component';
import { LibroActualizarComponent } from './componentes/libros/libro-actualizar/libro-actualizar.component';
import { EstaLogeadoAdminGuard } from './autentificacion/esta-logeado-admin.guard';
import { EstaLogeadoUsuarioGuard } from './autentificacion/esta-logeado-usuario.guard';

const rutas: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        children: [
            {
                path: 'usuario',
                children: [
                    {
                        path: 'buscar',
                        component: AdministradorBuscarComponent
                    },
                    {
                        path: 'editar',
                        component: AdministradorActualizarComponent
                    }
                ],
                canActivate: [EstaLogeadoAdminGuard]
            }
        ]
    },
    {
        path: 'autor',
        children: [
            {
                path: 'crear',
                component: AutorCrearComponent
            },
            {
                path: 'editar',
                component: AutorActualizarComponent
            },
            {
                path: 'listar',
                component: AutorListarComponent
            },
        ]
    },
    {
        path: 'libro',
        children: [
            {
                path: 'crear',
                component: LibroCrearComponent
            },
            {
                path: 'editar',
                component: LibroActualizarComponent
            },
            {
                path: 'listar',
                component: LibroListarComponent
            },
        ]
    },
    {
        path: 'registro-usuario',
        component: RegistroComponent
    },
    {
        path: 'buscar-evento',
        component: EventoBuscarComponent
    },
    {
        path: 'listar-evento',
        component: EventoListarComponent
    },
    {
        path: '**',
        component: NoEncontradaComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',

    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}