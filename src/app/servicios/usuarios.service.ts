import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{map } from 'rxjs/operators';
import{User} from './../clases/user.class';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
user:User;
uid="4zIF9EvSBq6ToaUSMaqZ";
  constructor( private fire:AngularFirestore) { }
  GetUsuario()
  {
    return this.fire.collection('Usuarios').doc(this.uid).valueChanges();
  }

  sendFire(user:User)
  {
    this.fire.collection('Usuarios').doc().update({
      Usuarios: firestore.FieldValue.arrayUnion(user),
    });
  }
}
