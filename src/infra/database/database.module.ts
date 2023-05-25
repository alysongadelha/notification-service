import { Module } from '@nestjs/common';
import { NotificationRespository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRespository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRespository,
      useClass: PrismaNotificationsRespository,
    },
  ],
  exports: [NotificationRespository],
})
export class DatabaseModule {}
