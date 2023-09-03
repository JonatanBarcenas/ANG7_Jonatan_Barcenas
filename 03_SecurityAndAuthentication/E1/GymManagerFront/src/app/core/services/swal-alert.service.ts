import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalAlertService {

  constructor() { }

  errorAlert(description:string, title: string){
  return Swal.fire({
    title: title,
    text: description,
    icon: 'error',
    confirmButtonColor: '#031a3d'
   
    })
  }

  successAlert(description:string, title: string){
    return Swal.fire({
      title: title,
      text: description,
      icon: 'success',
      confirmButtonColor: '#031a3d'
     
      })
    }

  textAlert(description:string){
    return Swal.fire({
      title: description,
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url(https://orig11.deviantart.net/dcab/f/2011/158/1/6/nyan_cat_by_valcreon-d3iapfh.gif)
        right top
        no-repeat
      `
    })
  }
}
