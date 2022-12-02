import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-formulario-libro',
    templateUrl: 'formulario-libro.component.html',
    styleUrls: ['formulario-libro.component.css']
})

export class FormularioLibroComponent implements OnInit {
    libroACrear = {
        icbn: '',
        nombreLibro: '',
        numeroPaginas: '',
        edicion: '',
        fechaPublicacion: '',
        nombreEditorial: '',
        idAutor: ''
    }

    @Output() libroCrear: EventEmitter<any> = new EventEmitter()

    ngOnInit(): void {
        this.enviarLibroACrear()
    }

    enviarLibroACrear() {
        this.libroCrear.emit(this.libroACrear)
    }
}