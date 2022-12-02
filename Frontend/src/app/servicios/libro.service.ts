import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()

export class LibroService {
    constructor(
        private readonly _httpClient: HttpClient
    ) { }


    crearUsuario(usuario: any) {
        const urlMaster = environment.url+'/'+"usuario"
        console.log(urlMaster)
        return this._httpClient.post(urlMaster, usuario)
    }

    obtenerTodos(){

    }

    eliminar(id:number){

    }

    actualizar(id:number,usuario:any){

    }
}