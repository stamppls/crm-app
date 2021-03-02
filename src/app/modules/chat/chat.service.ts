import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SseService } from 'src/app/shared/services/SSE.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements Resolve<any> {

  private onDataChanged$ = new BehaviorSubject<any[]>([]);
  public onDataChangedObservable$ = this.onDataChanged$.asObservable();

  onSendDataChanged$: BehaviorSubject<any>;

  contactlist = [
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
      contactChats: [],
      id: "60117256f8fdce329c904b0e"
    }
  ]

  constructor(
    private zone: NgZone,
    private sseService: SseService,
    private http: HttpClient
  ) {
    this.onSendDataChanged$ = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getContactList();
  }

  getServerEventSource(url: string) {
    return Observable.create(observer => {
      const eventSource = this.sseService.getEventSource(url);
      // eventSource.onopen = open => {
      //   console.log(open);
      //   this.zone.run(() => {
      //     observer.next(open);
      //   });
      // };

      eventSource.addEventListener("chat", event => {
        // console.log(event);
        this.zone.run(() => {
          observer.next(event);
        });
      })

      // eventSource.addEventListener("init", function (e) {
      //   console.log("Timestamp event Received.Ready State is " + e);
      // })

      eventSource.onmessage = event => {
        // console.log(event);
        this.zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        // console.log(error);
        this.zone.run(() => {
          observer.error(error);
        });
      };
    })
  }


  getContactList() {
    this.http.get('http://localhost:3001/snippedmessager').subscribe((res: any) => {
      this.onDataChanged$.next(res.data);
      // console.log(res.data);
    })
  }

  sendMessage(body): Observable<any> {
    return new Observable((observable) => {
      this.http.post('http://localhost:3001/sentevents', body)
        .subscribe((data) => {
          observable.next(data);
        });
    })
  }
}