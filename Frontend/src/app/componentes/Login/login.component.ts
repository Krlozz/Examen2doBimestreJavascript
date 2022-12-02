import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})

export class LoginComponent implements OnInit {


    credencitas = {}
    constructor(
        private readonly _usuarioService:UsuarioService
    )
    {}
    ngOnInit(): void {
    }

    credenciales(evento) {
        this.credencitas = evento
    }

    misCredenciales(){
        this.credencitas
        console.log(this.credencitas)
        // const usuario = {
        //     nombre: "223",
        //     correo: "asda",
        //     password: "dsd",
        //     fechaNacimiento: "dsd"           
        // }
        // this._usuarioService.crearUsuario(usuario)
    }


}