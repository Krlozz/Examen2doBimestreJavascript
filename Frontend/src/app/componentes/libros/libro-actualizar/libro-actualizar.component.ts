import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-libro-actualizar',
    templateUrl: 'libro-actualizar.component.html',
    styleUrls: ['libro-actualizar.component.css']
})

export class LibroActualizarComponent implements OnInit {
    crearUsuario = {}

    ngOnInit(): void {

    }

    libroACrear(evento) {
        this.crearUsuario = evento
    }

    creandoLibro() {
        console.log(this.crearUsuario)
    }
}