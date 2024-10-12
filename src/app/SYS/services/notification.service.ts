import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification, NotificationType } from '../../PetShop/model/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private sub = new Subject<Notification>();
  private idx = 0;
  constructor() {}
  getObservable(): Observable<Notification> {
    return this.sub.asObservable();
  }

  info(title: string, msg: string, duration: 3000) {
    this.sub.next(
      new Notification(this.idx++, NotificationType.info, title, msg, duration)
    );
  }
  success(title: string, msg: string, duration: 3000) {
    this.sub.next(
      new Notification(this.idx++, NotificationType.success, title, msg, duration)
    );
  }
  warning(title: string, msg: string, duration: 3000) {
    this.sub.next(
      new Notification(this.idx++, NotificationType.warning, title, msg, duration)
    );
  }
  error(title: string, msg: string, duration: 3000) {
    this.sub.next(
      new Notification(this.idx++, NotificationType.error, title, msg, duration)
    );
  }
}
