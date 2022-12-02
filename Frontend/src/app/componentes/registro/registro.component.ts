import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/servicios/usuario.service";

@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html',
    styleUrls: ['registro.component.css']
})

export class RegistroComponent implements OnInit {

    crearUsuario:any = {}

    constructor(
        private readonly _usuarioService: UsuarioService
    ) { }

    ngOnInit(): void {

    }

    usuarioACrear(evento) {
        this.crearUsuario = evento
    }

    creandoUsuario() {
        console.log(this.crearUsuario)
        const usuario = {
            nombre: this.crearUsuario.nombreUsuario,
            correo: this.crearUsuario.correoUsuario,
            password: this.crearUsuario.passwordUsuario,
            fechaNacimiento: this.crearUsuario.fechaNacimientoUsuario
        }
        this._usuarioService.crearUsuario(usuario)
        .subscribe(res=>{
            console.log(res)
        })
    }



}