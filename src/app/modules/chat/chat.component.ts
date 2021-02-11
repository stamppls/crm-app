import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  drawerCheck: boolean = false;
  checkChat: boolean = true;
  chatData = [];
  search = '';
  user = {
    image: 'https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg',
    name: 'โดเรม่อน'
  }
  send = '';
  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    // console.log(this.chatService.onDataChangedObservable$);
  }

  toggleDrawerLeft(ev): void {
    this.drawer.toggle();
    this.drawerCheck = ev;
  }

  toggleDrawerRight(ev){
    this.drawer.toggle();
    this.drawerCheck = ev;
  }

  openChat(ev) {
    if (ev[0]?.message) {
      this.checkChat = false;
      this.chatData = ev;
    } else {
      this.checkChat = true;
    }
  }

  goBack() {

  }
}
