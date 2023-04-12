import { createAction, props } from '@ngrx/store';

export const loadVenues = createAction('[Voucher] Load Venues');

export const loadVenuesSuccess = createAction(
	'[Voucher] Load Venues Success',
	props<{ metadata: any, venues: any }>()
);

export const loadVenuesFailure = createAction(
	'[Voucher] Load Venues Failure',
	props<{ error: any }>()
);

export const purchaseVoucher = createAction('[Voucher] Purchase Voucher');

export const purchaseVoucherSuccess = createAction(
	'[Voucher] Purchase Voucher Success',
	props<{ metadata: any, voucherData: string }>()
);

export const purchaseVoucherFailure = createAction(
	'[Voucher] Purchase Voucher Failure',
	props<{ error: any }>()
);
