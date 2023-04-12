import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import * as VoucherActions from './voucher.actions';

@Injectable()
export class VoucherEffects {
	loadVenues$ = createEffect(() =>
		this.actions$.pipe(
			ofType(VoucherActions.loadVenues),
			mergeMap(() =>
				this.voucherService.loadVenues().pipe(
					map((response) => VoucherActions.loadVenuesSuccess({ metadata: response.metadata, venues: response.record.venues })),
					catchError((error) => of(VoucherActions.loadVenuesFailure({ error })))
				)
			)
		)
	);

	purchaseVoucher$ = createEffect(() =>
		this.actions$.pipe(
			ofType(VoucherActions.purchaseVoucher),
			mergeMap(() =>
				this.voucherService.purchaseVoucher().pipe(
					map((response) => VoucherActions.purchaseVoucherSuccess({ metadata: response.metadata, voucherData: response.record })),
					catchError((error) => of(VoucherActions.purchaseVoucherFailure({ error })))
				)
			)
		)
	);

  constructor(private actions$: Actions, private voucherService: ApiService) {}
}
