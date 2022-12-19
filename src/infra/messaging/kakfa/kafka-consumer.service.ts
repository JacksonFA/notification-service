import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerervice
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['moving-man-11816-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: process.env.KAFKA_USER || '',
          password: process.env.KAFKA_PASS || '',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
