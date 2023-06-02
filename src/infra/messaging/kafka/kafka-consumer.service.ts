import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['credible-airedale-7869-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y3JlZGlibGUtYWlyZWRhbGUtNzg2OSSJRDwY0K9GjY0JJLQhC_KTvneyE7YE1KQ',
          password: '458b4e6d1ee04331a7a8441f2d9d7048',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
