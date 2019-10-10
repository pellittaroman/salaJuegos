import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any=[];
  
  
    constructor(private JugadoresU:UsuariosService) {
      
      this.JugadoresU.GetUsuario().subscribe(rooms=>{console.log(rooms);
        this.listado=rooms;      });
    }
    


  ngOnInit() {
  }

  

 
  

}
