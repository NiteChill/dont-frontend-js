import { useContext } from 'react';
import { NotificationValueContext, NotificationActionContext } from '../contexts/NotificationContext';

export const useNotifications = () => useContext(NotificationValueContext);
export const useNotificationsSetter = () => useContext(NotificationActionContext);