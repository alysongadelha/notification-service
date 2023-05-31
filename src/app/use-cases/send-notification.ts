import { Injectable } from '@nestjs/common';
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationRepository) {}
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
      createdAt: new Date(),
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
