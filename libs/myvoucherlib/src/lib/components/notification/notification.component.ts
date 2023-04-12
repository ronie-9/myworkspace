import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationState } from '../../store/notification/notification.reducer';
import { hideNotification } from '../../store/notification/notification.actions';


@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
	notification: any;

	constructor(private store: Store<{ notification: NotificationState }>) {}

	ngOnInit(): void {
		this.store.select('notification').subscribe((notificationState) => {
			this.notification = notificationState;
		});
	}

	ngOnDestroy(): void {
		this.store.dispatch(hideNotification());
	}
}
