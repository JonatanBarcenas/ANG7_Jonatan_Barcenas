import { Component } from '@angular/core';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';

@Component({
  selector: 'app-jonatan',
  templateUrl: './jonatan.component.html',
  styleUrls: ['./jonatan.component.scss']
})
export class JonatanComponent {

  constructor(
    private alertS: SwalAlertService
  ){

  }

  mostrarInfo(info: string) {
    if (info === 'correo') {
      this.alertS.textAlert('Correo \n l21650344@zitacuaro.tecnm.mx')
    } else if (info === 'github') {
      this.alertS.textAlert('Github \n https://github.com/JonatanBarcenas')
    }else if ( info == 'contratar'){
      this.alertS.successAlert('¡Gracias! pronto el ingeniero Jonatan Barcenas se contactará contigo', 'Contratar')
    }else if(info == 'reportar'){
      this.alertS.errorAlert('¡Vaya! no esperabamos que reportaras al ingeniero Jonatan Barcenas, se pondrá en contacto contigo', 'Reportar')
    }
  }
}
