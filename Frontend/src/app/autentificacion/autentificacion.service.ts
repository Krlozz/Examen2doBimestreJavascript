import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
import { Router } from "@angular/router";

@Injectable()

export class AutenticacionService {
    estaLogeadoUser: boolean = true
    estaLogeadoAdmin: boolean = true

    constructor(
        private readonly _httpClient: HttpClient,
        private readonly _router: Router,        
        ) { } //siempre importar ek servicio para poder conectarse al back end
    
    login(usuario: string, password: string) {
        const credenciales = {
            usuario,
            password
        }
        // const respuestaLogin$ = this._httpClient
        //     .post(environment.url + '/autentificar/login', credenciales) 
        //     .subscribe(
        //         (usuarioLogeado) => {                    
        //             this.estaLogeado = true                                        
        //             //this._router.navigate(['/inicio/'+usuarioLogeado.id])
        //         },
        //         error => {
        //             console.error(error)                    
        //         },
        //         () => {

        //         }
        //     )

    }


}
