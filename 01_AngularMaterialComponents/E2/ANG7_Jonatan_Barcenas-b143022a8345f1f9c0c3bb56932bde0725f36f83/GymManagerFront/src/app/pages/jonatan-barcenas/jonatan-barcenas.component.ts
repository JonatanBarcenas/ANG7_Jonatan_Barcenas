import { Component } from '@angular/core';

@Component({
  selector: 'app-jonatan-barcenas',
  templateUrl: './jonatan-barcenas.component.html',
  styleUrls: ['./jonatan-barcenas.component.scss']
})
export class JonatanBarcenasComponent {
  mostrarCorreo = false;
  mostrarGitHub = false;

  mostrarInfo(info: string) {
    if (info === 'correo') {
      this.mostrarCorreo = !this.mostrarCorreo;
    } else if (info === 'github') {
      this.mostrarGitHub = !this.mostrarGitHub;
    }
  }
}
