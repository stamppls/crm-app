import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatService } from './chat.service';
import { LeftFormModule } from '../left-form/left-form.module';
import { RightFormModule } from '../right-form/right-form.module';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    resolve: [ChatService]
  }
]

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
    LeftFormModule,
    RightFormModule
  ]
})
export class ChatModule { }
