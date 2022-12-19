import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './kakfa/controllers/notifications.controller';
import { KafkaConsumerervice } from './kakfa/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerervice, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
