import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 
@Injectable()
export class PaisesService {

  constructor(public miHttp: MiHttpService ) { }


  public listar():Promise<Array<any>> {
       return   this.miHttp.httpGetP("https://restcountries.com/v3.1/all")
          .then( data => {
           
            return data;
          })
          .catch( err => {
            console.log( err );
            return null;
          });
          //return null;
    }
}
