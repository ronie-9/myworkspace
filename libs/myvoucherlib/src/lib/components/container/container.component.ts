import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logIn } from '../../store/user/user.actions';
import { showNotification } from '../../store/notification/notification.actions';

@Component({
  selector: 'myvoucherlib-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
	constructor(private store: Store) {}

	ngOnInit() {
		// Simulate a user login by dispatching the logIn action
		this.store.dispatch(logIn());
	}
}
