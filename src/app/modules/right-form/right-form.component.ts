import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-form',
  templateUrl: './right-form.component.html',
  styleUrls: ['./right-form.component.scss']
})
export class RightFormComponent implements OnInit {
  @Input() model;

  @Output() drawer: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(ev) {
    this.drawer.emit(ev);
  }

}
