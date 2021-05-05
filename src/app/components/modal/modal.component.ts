import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  closeResult = '';
  @Input() text;
  @Input() open;
  @ViewChild('modal') modal: ElementRef;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    console.log(this.open);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.open) {
      changes.open.currentValue ? this.openModal(this.modal) : '';
    }
    if (changes.text) {
      changes.text.currentValue ? this.openModal(this.modal) : '';
    }
  }

  openModal(modal) {
    this.modalService.open(modal).result.then((res) => {
      location.reload();
    });
    console.log(this.open);
  }
}
