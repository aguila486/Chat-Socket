import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor( public wsService: WebsocketService, private router: Router) { }

  canActivate() {
    console.log( this.wsService.getUsuario() );
    if ( this.wsService.getUsuario() ) {
      console.log('Si existe');
      return true;
    } else {
      console.log('No existe');
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
