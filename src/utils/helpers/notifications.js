import { notification } from 'antd';

export class NotificationHelper {
  static notification(type, title, message) {
    notification[type]({
      message: title,
      description: message,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }
}