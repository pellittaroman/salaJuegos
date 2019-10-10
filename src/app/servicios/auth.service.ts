import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {auth} from 'firebase/app';
import {User } from './../clases/user.class'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { firestore } from 'firebase';
@Injectable()
export class AuthService {
uid="4zIF9EvSBq6ToaUSMaqZ";
usuario:User;
  public logeado: any = false;
  
  constructor(public afAuth: AngularFireAuth, private fire:AngularFirestore) 
  {
    afAuth.authState.subscribe(user=>(this.logeado = user))
  }

  RegistrarUsuario(email:string, contraseña: string,sexo:string,nombre:string)
  {
    const usuario={
      nombre:nombre,
      sexo:sexo,
      email:email
    }
    return new Promise((resolve, reject)=>
    {
      this.afAuth.auth.createUserWithEmailAndPassword(email, contraseña).then(res=>{this.fire.collection('Usuarios').doc(this.uid).update({
        Usuarios: firestore.FieldValue.arrayUnion(usuario),});resolve(res)}).catch(err=> reject(err))});
    
  }

  LoginUsuario(email: string, contraseña: string)
  {
   
    return new Promise((resolve, reject)=>
    {
      this.afAuth.auth.signInWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
    });
  }

  LogoutUsuario()
  {
    return this.afAuth.auth.signOut();
  }

  isAuth() 
  {
    return this.afAuth.authState.pipe(map(auth => auth));
  }


}