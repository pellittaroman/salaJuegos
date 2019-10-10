import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from  './../../servicios/auth.service';
import { createStorageRef } from '@angular/fire/storage';
import { User } from './../../clases/user.class';
import{ UsuariosService }from './../../servicios/usuarios.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: string = "";
  clave: string = "";
  nombre:string= "";
  sexo:string="";
  
  constructor(private router: Router, private authService: AuthService, ) { }

  ngOnInit() {
  }

  Registrar()
  {
    this.cargar();
    this.authService.RegistrarUsuario(this.usuario, this.clave,this.sexo,this.nombre ).then((res)=>  
    {
      this.router.navigate(['/Principal']);
    }).catch(error => console.log("Error:", error));
    
  }
  cargar()
  {
    
    if(this.sexo=="1")
    {
      this.sexo="Femenimo";  
    }
    
    else
    { 
      this.sexo="Masculino";  
    }
    
    
  }
}


