import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-formulario-registro',
    templateUrl: 'formulario-registro.component.html',
    styleUrls: ['formulario-registro.component.css']
})

export class FormularioRegistroComponent implements OnInit {

    usuarioACrear = {
        nombreUsuario: '',
        correoUsuario:'',
        passwordUsuario: '',
        fechaNacimientoUsuario: ''
    }

    @Output() usuarioCrear: EventEmitter<any> = new EventEmitter()

    ngOnInit(): void {
        this.enviarUsaurioACrear()
    }

    enviarUsaurioACrear() {
        this.usuarioCrear.emit(this.usuarioACrear)
    }



}