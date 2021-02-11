import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-form',
  templateUrl: './left-form.component.html',
  styleUrls: ['./left-form.component.scss']
})
export class LeftFormComponent implements OnInit {
  @Input() model: any;

  @Output() chat: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.model);
  }

  chatToggle(ev){
    this.chat.emit(ev);
  }

}
