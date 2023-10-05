import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  @Input() row?:User;
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  myModal!: bootstrap.Modal;
  
  ngOnInit(): void {
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
    this.myModal.show();
  }

  closeModal(){
    this.myModal.hide();
    this.closeModalEvent.emit(true);
  }

}
