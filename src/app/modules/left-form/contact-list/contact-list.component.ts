import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() model;

  @Output() chat: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openChat(body) {
    this.chat.emit(body.contactChats);
  }

}
