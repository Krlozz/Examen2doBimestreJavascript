import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-libro-listar',
    templateUrl: 'libro-listar.component.html',
    styleUrls: ['libro-listar.component.css']
})

export class LibroListarComponent implements OnInit{
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