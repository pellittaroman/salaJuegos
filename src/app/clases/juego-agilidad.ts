import { Juego } from "./juego";


export class JuegoAgilidad extends Juego {
    operadores: Array<string> = ["+", "-", "*"];
    operador: string;
    numeroUno: number;
    numeroDos: number;
    resultado: number;
    numeroIngresado: number;

    constructor(nombre?: string, gano?: boolean, jugador?: string) 
    {
        super("Agilidad aritmética", gano, jugador);
    }

    public generarCuenta()
    {
        this.numeroUno = Math.floor((Math.random() * 20) + 1);
        this.numeroDos = Math.floor((Math.random() * 10) + 1);
        this.operador = this.operadores[Math.floor(Math.random() * this.operadores.length)];
        this.resultado = this.calcularResultado();
    }

    calcularResultado(): number 
    {
        let retorno: number;

        switch (this.operador) 
        {
            case "+":
                retorno = this.numeroUno + this.numeroDos;
                break;
            case "-":
                retorno = this.numeroUno - this.numeroDos;
                break;
            case "*":
                retorno = this.numeroUno * this.numeroDos;
                break;
        }

        return retorno;
    }


    public verificar(): boolean 
    {
        if (this.numeroIngresado == this.resultado)
        {
            this.gano = true;
        }

        return this.gano;
    }

    resetear()
    {
        this.numeroIngresado=0;
        this.gano = false;
    
    }
}
