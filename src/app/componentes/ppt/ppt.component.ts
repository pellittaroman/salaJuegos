import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
jugando:boolean=true;
mostrar:boolean=false;
mostrarJugador:string;
mostrarMaquina:string;
jugadaMaquina:number=1;
jugadasPosibles: Array<number> = [1, 2, 3];
jugadaUsuario: number = 1;
resultado: number = -2;
gano=false;
perdio=false;
empato=false;
nuevo=false;
  constructor() { }

  ngOnInit() {
  }
  

  public JugarMaquina() 
  {
      this.jugadaMaquina = this.jugadasPosibles[Math.floor(Math.random() *  this.jugadasPosibles.length) ];
  }

  public verificarJugada(a:number): void 
    {
      this.jugadaUsuario=a;
      this.JugarMaquina();
      this.jugando=false;
      this.mostrar=true;
      this.nuevo=true;
        switch (this.jugadaUsuario) 
        {
            case 1: // PIEDRA
                if (this.jugadaMaquina == 1) 
                {
                    this.resultado = 0 // empate
                } 
                else 
                {
                    if (this.jugadaMaquina == 2)
                    {
                        this.resultado = -1 // usr pierde
                    }
                    else
                    {
                        this.resultado = 1 // usr gana
                    }
                }
                break;

            case 2: // PAPEL
                if (this.jugadaMaquina == 1) 
                {
                    this.resultado = 1 // usr gana
                } 
                else 
                {
                    if (this.jugadaMaquina == 2)
                    {
                        this.resultado = 0 // empate
                    }
                    else
                    {
                        this.resultado = -1 // usr pierde
                    }
                }
                break;

            case 3: // TIJERA
                if (this.jugadaMaquina == 1) 
                {
                    this.resultado = -1 // usr pierde
                } 
                else 
                {
                    if (this.jugadaMaquina == 2)
                    {
                        this.resultado = 1 // usr gana
                    }
                    else
                    {
                        this.resultado = 0 // empate
                    }
                }
                break;
        }
        this.verificar();
    }

    verificar()
    {
      this.jugando=false;
      this.mostrar=true;
      this.mostrarMaquina=this.ver(this.jugadaMaquina);
      this.mostrarJugador=this.ver(this.jugadaUsuario);
      if(this.resultado==1)
      {
        this.gano=true;
      }
      else
      {
        if(this.resultado==0)
        {
          this.empato=true;
        }
        else
        {
          this.perdio=true;
        }
      }
    }
    ver(jugada:number):string
    {
      switch(jugada)
      {
        case 1:
          return './assets/imagenes/piedraa.jpg';
          
          case 2:
              return './assets/imagenes/papel.jpg';
            
              case 3:
                return './assets/imagenes/tijera.jpg';
                
      }
    }
    nuevoJuego()
    {
      this.nuevo=false;
      this.gano=false;
      this.perdio=false;
      this.empato=false;
      this.jugando=true;
      this.mostrar=false;
      this.jugadaMaquina = 0;
      this.jugadaUsuario = 0;
    }

}
