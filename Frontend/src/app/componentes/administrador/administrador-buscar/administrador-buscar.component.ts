import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-administrador-buscar',
    templateUrl: 'administrador-buscar.component.html',
    styleUrls: ['administrador-buscar.component.css']
})

export class AdministradorBuscarComponent implements OnInit {

    totalRecords = 10
    limit = 2
    todosEquipos = [
        {
            nombre: 'hhhh',
            estadio: 'v',
            localizacion: 'c'
        },
        {
            nombre: 'e',
            estadio: 'r',
            localizacion: 't'
        },
        {
            nombre: 'q',
            estadio: 's',
            localizacion: 'v'
        }
    ]
    ngOnInit(): void {

    }
}