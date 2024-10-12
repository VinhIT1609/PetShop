import { NotificationService } from '../../../SYS/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from '../../model/notification';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  //color
  success: string = '#06D001';
  warning: string = 'yellow';
  error: string = '#D24545';
  info: string = '#83B4FF';

  getBG_Notification(type: number): string {
    switch (type) {
      case 0:
        return this.success;
      case 1:
        return this.warning;
      case 2:
        return this.error;
      case 3:
        return this.info;
      default:
        return '#ffffff';
    }
  }

  //icon
  successIcon: string = 'check_circle';
  warningIcon: string = 'warning';
  errorIcon: string = 'error';
  infoIcon: string = 'info';
  //main
  notifications: Notification[] = [];

  private subScription?: Subscription;

  constructor(private notification_svc: NotificationService) {}

  ngOnInit() {
    this.subScription = this.notification_svc
      .getObservable()
      .subscribe((notification) => this.addNofication(notification));
    // comment dưới để test service
    // this.notifications.push(
    //   new Notification(0, NotificationType.success, 'hello', 'hello', 3000)
    // );
    // this.notifications.push(
    //   new Notification(1, NotificationType.success, 'hello', 'hello', 3000)
    // );
  }

  private addNofication(notification: Notification) {
    this.notifications = [...this.notifications, notification];
    if (notification.duration != 0) {
      setTimeout(() => this.closeNoti(notification), notification.duration);
    }
  }

  closeNoti(notification: Notification) {
    this.notifications = this.notifications.filter(
      (noti) => noti.id !== notification.id
    );
  }
}
