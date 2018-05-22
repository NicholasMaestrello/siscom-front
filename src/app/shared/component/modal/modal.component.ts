import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: String;
  @Input() message: String;

  @Output() onResponse = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  yesReponse() {
    this.onResponse.emit(true);
  }

  noResponse() {
    this.onResponse.emit(false);
  }
}
