import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-autor-actualizar',
    templateUrl: 'autor-actualizar.component.html',
    styleUrls: ['autor-actualizar.component.css']
})

export class AutorActualizarComponent implements OnInit {
    crearAutor = {}

    ngOnInit(): void {

    }

    autorACrear(evento) {
        this.crearAutor = evento
    }

    creandoAutor() {
        console.log(this.crearAutor)
    }
}