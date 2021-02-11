import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements Resolve<any> {

  private onDataChanged$ = new BehaviorSubject<any[]>([]);
  public onDataChangedObservable$ = this.onDataChanged$.asObservable();

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getContactList();
  }


  getContactList() {
    let contactlist = [
      {
        layout: "chat",
        _id: "60117256f8fdce329c904b0e",
        contactName: "โนบิตะ",
        contactCompany: "601171a8f8fdce329c904b0d",
        contactPhoneNo: "099-77555558",
        contactEmail: "test220@gmail.com",
        contactLineId: "Nobita",
        contactAddress: "467/4",
        contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
        contactChats: [
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "สวัสดี โนบิตะ"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "สวัสดี โดเรม่อน"
          },
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "นายเป็นยังไงบ้าง"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "ฉันโดนใจแอ้น แกล้งทุกวันเลย!!"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "นายช่วยเอาของวิเศษมาช่วยฉันหน่อยสิ่ แงงงงงง"
          },
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "นายหัดสู้ด้วยตัวนายเองบ้างสิ่ ไม่ใช่เอาแต่ร้องให้กลับมาให้ฉันช่วยตลอด"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "ก็ฉันอ่อนแอนิ่หนา ฉันถึงต้องมีนายไง แงงงงงงง"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "นะ โดเรม่อน ขอของวิเศษหน่อยนะ"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "เดี๋ยวฉันซื้อโดรายากิ ให้นายกิน 5 ชิ้นเลยย"
          },
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "จริงหรอออ แต่นายต้องสัญญากับฉันก่อนนะว่าต้องใช้อย่างละมัดระวังน่ะ"
          },
          {
            contactName: "โนบิตะ",
            contactImage: "https://www.beartai.com/wp-content/uploads/2017/06/fwdder_3_1438921392-600x352.jpeg",
            message: "อื้อออ ฉันสัญญา ฉันจะระวังสุด ๆ เลยล่ะ อิอิอิอิอิ"
          },
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "กระเป๋าวิเศษษ!!!!"
          },
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "กระเป๋าวิเศษษ!!!!"
          },
          {
            contactName: "โดเรม่อน",
            contactImage: "https://sites.google.com/site/doremxn12345/_/rsrc/1488854511791/pra-wati-do-re-mxn/gVCQ-gOH.jpeg",
            message: "กระเป๋าวิเศษษ!!!!"
          },
        ],
        id: "60117256f8fdce329c904b0e"
      },
      {
        _id: "60117256f8fdce329c904b0e",
        contactName: "ใจแอ้น",
        contactCompany: "601171a8f8fdce329c904b0d",
        contactPhoneNo: "099-77555558",
        contactEmail: "test220@gmail.com",
        contactLineId: "่jaiant",
        contactAddress: "467/4",
        contactImage: "https://resource.nationtv.tv/photo_news/2019/09/05/640_8ikk8hhb5bkf97i8jbbce.jpg",
        contactChats: [],
        id: "60117256f8fdce329c904b0e"
      }
    ]
    this.onDataChanged$.next(contactlist);
  }

}
