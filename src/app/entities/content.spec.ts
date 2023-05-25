import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uam solicitacao de amizadade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with lesse than 5 characters', () => {
    expect(() => new Content('Hi')).toThrow();
  });

  it('should not be able to create a notification content with lesse than 241 characters', () => {
    expect(() => new Content('Hi'.repeat(241))).toThrow();
  });
});
