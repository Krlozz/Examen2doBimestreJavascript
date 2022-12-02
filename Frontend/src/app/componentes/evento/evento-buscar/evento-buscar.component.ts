import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-evento-buscar',
    templateUrl: 'evento-buscar.component.html',
    styleUrls: ['evento-buscar.component.css']
})

export class EventoBuscarComponent implements OnInit {

    totalRecords = 10
    limit = 2
    todosEquipos = [
        {
            nombre: 'hhhh',
            estadio: 'v',            
        },
        {
            nombre: 'e',
            estadio: 'r',            
        },
        {
            nombre: 'q',
            estadio: 's',            
        }
    ]

    ngOnInit(): void {

    }

}