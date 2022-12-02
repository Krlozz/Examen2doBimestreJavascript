import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-formulario-autor',
    templateUrl: 'formulario-autor.component.html',
    styleUrls: ['formulario-autor.component.css']
})

export class FormularioAutorComponent implements OnInit{
    autorACrear = {
        nombreAutor: '',
        apellidoAutor: '',
        fechaNacimientoAutor:'',
        numeroLibros: ''
    }

    @Output() autorCrear: EventEmitter<any> = new EventEmitter()

    ngOnInit(): void {
        this.enviarAutorACrear()
    }

    enviarAutorACrear() {
        this.autorCrear.emit(this.autorACrear)
    }
}