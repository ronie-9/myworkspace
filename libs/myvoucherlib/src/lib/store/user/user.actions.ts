import { createAction, props } from '@ngrx/store';

export const logIn = createAction('[User] Log In');

export const logInSuccess = createAction(
	'[User] Log In Success',
  	props<{ loggedIn: boolean, email: string }>()
);

export const loadUsersFailure = createAction(
  	'[User] Log In Failure',
  	props<{ error: any }>()
);
