import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../../chat/chat.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() model;

  @Output() chat: EventEmitter<any> = new EventEmitter();
  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    console.log(this.model);
  }

  openChat(body) {
    this.chat.emit(body);
  }

}
