import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-autor-listar',
    templateUrl: 'autor-listar.component.html',
    styleUrls: ['autor-listar.component.css']
})

export class AutorListarComponent implements OnInit{
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