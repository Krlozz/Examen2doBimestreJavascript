import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-libro-crear',
    templateUrl: 'libro-crear.component.html',
    styleUrls: ['libro-crear.component.css']
})

export class LibroCrearComponent implements OnInit{

    crearUsuario = {}

    ngOnInit(): void {
        
    }

    libroACrear(evento){
        this.crearUsuario = evento
    }

    creandoLibro(){
        console.log(this.crearUsuario)
    }


    
}