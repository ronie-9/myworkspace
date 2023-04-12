import { createAction, props } from '@ngrx/store';

export const showNotification = createAction(
	'[Notification] Show Notification',
	props<{ title: string; message: string; notificationType: string }>()
);

export const hideNotification = createAction('[Notification] Hide Notification');
