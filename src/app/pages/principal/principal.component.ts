import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  mostrarModal: boolean = false;

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void{
    this.mostrarModal = false;
  }
  
}
