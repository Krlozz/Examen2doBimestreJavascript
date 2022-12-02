import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-autor-crear',
    templateUrl: 'autor-crear.component.html',
    styleUrls: ['autor-crear.component.css']
})

export class AutorCrearComponent implements OnInit{
    crearAutor = {}

    ngOnInit(): void {
        
    }

    autorACrear(evento){
        this.crearAutor = evento
    }

    creandoAutor(){
        console.log(this.crearAutor)
    }


}