import { EventEmitter } from '@angular/core';
import { Component, OnInit, ElementRef, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }

}
