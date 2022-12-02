import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEndAutores';

  constructor(
    
  ){}


  crear(){    
    // this._usuarioService.crea()
    // const usuario = {
    //   nombreUsuario: 'hola1',
    //   correoUsuario: 'hola1',
    //   password: 'hola1',
    //   fechaNacimiento: 'hola1'
    // }
    // console.log(usuario)
    // this._usuarioService.crea(usuario).subscribe(res=>{
    //   console.log(res)
    // })

  }
}
