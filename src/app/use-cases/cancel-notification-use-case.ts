import { NotificationsRepository } from '../repositories/notification-repository';
import { Notification } from '../entities/notification';
import { Injectable } from '@nestjs/common';
// Use-case para enviar notificação - use cases representam os processos e serviços de uma aplicação

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    // ? Método que cria um novo objeto da classe notificação
    notificationId: string,
  ): Promise<Notification> {
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    notification.setCanceledAt();
    await this.notificationsRepository.update(notification);

    return notification;
  }
}
