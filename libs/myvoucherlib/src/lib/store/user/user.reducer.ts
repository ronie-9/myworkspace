import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
	loggedIn: boolean;
	email: string;
}

export const initialState: UserState = {
	loggedIn: false,
	email: '',
};

export const userReducer = createReducer(
	initialState,
	on(UserActions.logInSuccess, (state, { loggedIn, email }) => {
		return { ...state, loggedIn, email };
	}),
);

export function reducer(state: UserState | undefined, action: Action) {
	return userReducer(state, action);
}
