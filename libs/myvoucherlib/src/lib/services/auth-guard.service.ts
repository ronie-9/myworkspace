import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UserState } from '../store/user/user.reducer';
import { showNotification } from '../store/notification/notification.actions';

@Injectable({
  	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private store: Store<{ user: UserState }>) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.store.select('user').pipe(
			take(1),
			map((userState: UserState) => {
				if (userState.loggedIn) {
					return true;
				} else {
					// If not logged in, you can navigate to a login page or show a message
					// this.router.navigate(['/login']);
					this.store.dispatch(
						showNotification({ title: 'User not logged in', message: 'Please log in to access this page', notificationType: 'error' })
					);
					return false;
				}
			})
		);
	}
}
