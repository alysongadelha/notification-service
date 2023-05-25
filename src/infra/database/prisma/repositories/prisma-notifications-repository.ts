import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { NotificationRespository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRespository implements NotificationRespository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
