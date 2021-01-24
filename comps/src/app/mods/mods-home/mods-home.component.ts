import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    { title: 'Why is the sky blue?', content: " The sky is blue" },
    { title: 'Why is the sky blue?', content: " The sky is blue" },
    { title: 'Why is the sky blue?', content: " The sky is blue" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

  onClose() {
    this.modalOpen = false;
  }

}
