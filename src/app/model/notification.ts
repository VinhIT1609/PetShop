export class Notification {
  constructor(
    public id: number,
    public type: NotificationType,
    public title: string,
    public msg: string,
    public duration: number,
    public cssClass?:string
  ) {}
}

export enum NotificationType {
  success = 0,
  warning = 1,
  error = 2,
  info = 3,
}
