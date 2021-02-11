import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightFormComponent } from './right-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RightFormComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [RightFormComponent]
})
export class RightFormModule { }
