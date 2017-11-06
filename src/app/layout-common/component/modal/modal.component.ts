import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../player/model/player';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() playerLoser: Player;

  constructor() {
  }

  ngOnInit() {
    this.showModal = false;
  }

  hideModal(): void {
    this.showModal = false;
  }
}
