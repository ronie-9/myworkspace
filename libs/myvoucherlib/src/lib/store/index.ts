import { isDevMode } from '@angular/core';
import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer,
} from '@ngrx/store';
import * as fromVoucher from './voucher/voucher.reducer';
import * as fromUser from './user/user.reducer';
import * as fromNotification from './notification/notification.reducer';

export interface State {
	voucher: fromVoucher.VoucherState;
	user: fromUser.UserState;
	notification: fromNotification.NotificationState;
}

export const reducers: ActionReducerMap<State> = {
	voucher: fromVoucher.reducer,
	user: fromUser.reducer,
	notification: fromNotification.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const initialState: State = {
	voucher: fromVoucher.initialState,
	user: fromUser.initialState,
	notification: fromNotification.initialState,
};
