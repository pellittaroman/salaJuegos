import { Component } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent {
palabra:string;
palabraOculta:string;
palabraIngresada:string;
indice:number;
isWin:boolean;
jugando=false;
id:number;
loser=false;
loser2=false;
contador:number;
diccionario: {[id: number]: string;} = {1:"roma", 2:"armo", 3:"mora", 4:"pala",
    5: "tapa", 6: "pata", 7: "topo", 8: "opto",9:"arpa",10:"para",11:"rapa",12:"capa",13:"copa",14:"pato",
  15:"opta",16:"tapo",17:"golpe",18:"paso",19:"sapo",20:"posa",21:"sopa",22:"mano",23:"verde",24:"tabla",25:"movil",26:"libro",27:"castor",
  28:"cobra",29:"corte",30:"terco",31:"troce",32:"carpa",33:"nube",34:"rancio",35:"toro",36:"gato",37:"plata",
  38:"dolar",39:"valor",40:"piso"};
  constructor() { }
nuevoJuego()
{
  this.palabraIngresada="";
  this.contador=0;
  this.isWin=false;
  this.jugando=true;
  this.indice=Math.floor((Math.random() * 40) + 1);
  this.palabra=this.diccionario[this.indice];
  this.palabraOculta=this.palabra;
  let array: Array<string> = this.palabra.split("");
  array.sort(); 
  this.palabra = array.join("");
  this.palabraOculta.toLowerCase();
  console.log(this.palabraOculta);
}
 
verificar()
{
  this.contador++;
  if(this.palabraIngresada!=undefined)
  {
    this.palabraIngresada=this.palabraIngresada.toLowerCase();
  }
  
  if(this.palabraIngresada==this.palabraOculta)
  {
    this.jugando=false;
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
}
