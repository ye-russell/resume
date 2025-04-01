import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() openedProject = ''; // Controls modal visibility
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.openedProject = '';
    this.closeModalEvent.emit(); // Notify parent component
  }

  closeOnBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}