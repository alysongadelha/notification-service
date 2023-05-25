import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'recipientId',
      content: new Content('New friendship solicitation'),
      category: 'category',
    });

    expect(notification).toBeTruthy();
  });
});
