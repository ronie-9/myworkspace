import { createReducer, on, Action } from '@ngrx/store';
import * as NotificationActions from './notification.actions';

export interface NotificationState {
    show: boolean;
    title: string;
    message: string;
    notificationType: string;
}

export const initialState: NotificationState = {
    show: false,
    title: '',
    message: '',
    notificationType: '',
};

export const notificationReducer = createReducer(
    initialState,
    on(NotificationActions.showNotification, (state, { title, message, notificationType }) => ({
        ...state,
        show: true,
        title,
        message,
        notificationType,
    })),
    on(NotificationActions.hideNotification, (state) => ({ ...state, show: false, title: '', message: '', notificationType: '' }))
);

export function reducer(state: NotificationState | undefined, action: Action) {
    return notificationReducer(state, action);
}
