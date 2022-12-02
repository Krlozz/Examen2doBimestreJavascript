import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-administrador-actualizar',
    templateUrl: 'administrador-actualizar.component.html',
    styleUrls: ['administrador-actualizar.component.css']
})

export class AdministradorActualizarComponent implements OnInit {

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

    handleClose(evento){
        console.log(evento)
        evento.close()
    }

}