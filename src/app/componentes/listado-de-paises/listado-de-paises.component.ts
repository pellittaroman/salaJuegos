import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-listado-de-paises',
  templateUrl: './listado-de-paises.component.html',
  styleUrls: ['./listado-de-paises.component.css']
})
export class ListadoDePaisesComponent implements OnInit {
  public listadoDePaises: Array<any>;
  miServicioDePaises:PaisesService;
  numero:number;
  respuesta:string;
  pais:any=[];
  isResponding=false;
  isWin=false;
  ingreso:string;
  loser=false;
  loser2=false;
  contador:number;
  rendir=false;
  constructor( servicioPaises:PaisesService) {
    this.miServicioDePaises=servicioPaises;
   }

  ngOnInit() {
    this.miServicioDePaises.listar()
    .then(datos=>{
      
      this.listadoDePaises=datos;
    });
  }
  nuevaBandera()
  {
    this.rendir=false;
    this.isWin=false;
    this.ingreso="";
    this.numero = Math.floor(Math.random() * 250);
    this.pais=this.listadoDePaises[this.numero];
    this.respuesta=this.pais.translations.es.toLowerCase();
    console.log(this.respuesta);
    this.isResponding=true;
    this.contador=0;
  }
  verificar()
  {
    this.ingreso=this.ingreso.toLowerCase();
    this.contador++;
  

    if(this.respuesta==this.ingreso)
    {
      this.isResponding=false;
      this.isWin=true;
      this.loser=false;
      this.loser2=false;
    }
    else
    {
      if(this.contador%2)
      {
        this.loser2=false;
        this.loser=true;
      }
      else
      { 
        this.loser2=true;
        this.loser=false;
      }
      
    }
  }
  rendirse()
  {
    this.isResponding=false;
    this.rendir=true;
  }
}
