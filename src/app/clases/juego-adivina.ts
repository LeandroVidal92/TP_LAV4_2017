import { Juego } from '../clases/juego'

export class JuegoAdivina extends  Juego {
  numeroSecreto: number = 0;
  numeroSecretoppt: number = 0;
  numeroIngresado = 0;
   
  constructor(nombre?: string, gano?: boolean, jugador?:string,minutos?:string,segundos?:string,intentos?:any) {
        super("Adivina el número",gano,jugador,minutos,segundos,intentos)}

public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }

     
public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
      }
      
      public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
          return "El numero es mayor al ingresado";
        }
        return "El numero es menor al ingresado";
      }
}
