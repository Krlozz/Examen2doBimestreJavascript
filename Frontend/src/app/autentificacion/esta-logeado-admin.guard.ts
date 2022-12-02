import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AutenticacionService } from "./autentificacion.service";


@Injectable()

export class EstaLogeadoAdminGuard implements CanActivate{
    
    constructor(
        private readonly _autenticacionService:AutenticacionService
        ){}
    
    canActivate(parametroRuta:ActivatedRouteSnapshot){  

        return this._autenticacionService.estaLogeadoAdmin
    }

    
}
