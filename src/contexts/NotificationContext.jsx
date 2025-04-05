import { useCallback, useMemo, useState, createContext } from 'react';

const defaultNotificationValueContext = {};

export const NotificationActionContext = createContext({ setNotification: () => {} });
export const NotificationValueContext = createContext(defaultNotificationValueContext);

export const NotificationProvider = ({ children }) => {
    const [notificationsByGame, setNotificationsByGame] = useState(defaultNotificationValueContext);

    const setNotification = useCallback((nbNotification, gameKey) => {
        setNotificationsByGame((previousNotif) => ({ ...previousNotif, [gameKey]: nbNotification }));
    }, []);
    const actionContextValue = useMemo(() => ({
        setNotification,
    }), [setNotification]);

    return (
        <NotificationActionContext.Provider value={actionContextValue}>
            <NotificationValueContext.Provider value={notificationsByGame}>
                {children}
            </NotificationValueContext.Provider>
        </NotificationActionContext.Provider>
    );
};