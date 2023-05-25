import { InMemoryNotificationsRespository } from '../../../test/repositories/in-memory-notifications-repositories';
import { SendNotification } from './send-notification';

describe('send notifications', () => {
  it('should be able to send a notification', async () => {
    const notificationsRespository = new InMemoryNotificationsRespository();
    const sendNotification = new SendNotification(notificationsRespository);

    const { notification } = await sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'exemple-recipientId-id',
    });

    expect(notificationsRespository.notifications).toHaveLength(1);
    expect(notificationsRespository.notifications[0]).toEqual(notification);
  });
});
