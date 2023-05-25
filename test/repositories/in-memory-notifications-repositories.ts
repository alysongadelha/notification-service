import { Notification } from 'src/app/entities/notification';
import { NotificationRespository } from 'src/app/repositories/notifications-repository';

export class InMemoryNotificationsRespository
  implements NotificationRespository
{
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
