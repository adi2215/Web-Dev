import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input() label : string = '';
  @Output() buttonClickEvent = new EventEmitter<boolean>();

  handleButtonClick() {
    this.buttonClickEvent.emit(true);
  }
}
