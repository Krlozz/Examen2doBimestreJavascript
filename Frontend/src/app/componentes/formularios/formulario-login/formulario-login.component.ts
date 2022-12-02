import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'app-formulario-login',
    templateUrl: 'formulario-login.component.html',
    styleUrls: ['formulario-login.component.css']
})

export class FormularioLoginComponent implements OnInit {


    credenciales = {
        nombre_usuario: '',
        password_usuario: ''
    }

    ngOnInit(): void {
        this.enviar()
    }

    @Output() enviarCredenciales: EventEmitter<any> = new EventEmitter()

    enviar() {
        this.enviarCredenciales.emit(this.credenciales)
    }





}