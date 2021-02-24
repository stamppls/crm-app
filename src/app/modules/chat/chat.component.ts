import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { exit } from 'process';
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
  contactImage = 'https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg'
  send = '';
  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.chatService.getServerEventSource('http://localhost:3001/events')
      .subscribe((chat) => {
        let chats = JSON.parse(chat.data);
        if (chats.length > 0) {
          chats.forEach(ch => {
            this.chatService.contactlist[0].contactChats.push(ch);
          });
        } else {
          this.chatService.contactlist[0].contactChats.push(chats);
        }
      });
  }

  toggleDrawerLeft(ev): void {
    this.drawer.toggle();
    this.drawerCheck = ev;
  }

  toggleDrawerRight(ev) {
    this.drawer.toggle();
    this.drawerCheck = ev;
  }

  openChat(ev) {
    if (ev.lenght !== 0) {
      this.checkChat = false;
      this.chatData = ev;
    } else {
      this.checkChat = true;
    }
  }

  goBack() {

  }

  sendMessage() {
    let body;
    this.chatData.forEach(chat => {
      if (chat.messaging) {
        body = {
          messaging_type: "RESPONSE",
          recipient: {
            id: chat?.messaging[0].sender.id
          },
          message: {
            text: this.send
          }
        }
      }
    })
    this.chatService.sendMessage(body).subscribe((res) => {
      this.send = '';
    })
  }
}
