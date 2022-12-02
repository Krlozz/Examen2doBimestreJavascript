import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-evento-listar',
    templateUrl: 'evento-listar.component.html',
    styleUrls: ['evento-listar.component.css']
})

export class EventoListarComponent implements OnInit {

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
    selectedCar: any;

    displayDialog: boolean;


    


    ngOnInit(): void {
    
    }

    selectCar(event: Event, car: any) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
        console.log(event,car,'kheeeee')
    }


    onDialogHide() {        
        this.selectedCar = null;
    }

}
