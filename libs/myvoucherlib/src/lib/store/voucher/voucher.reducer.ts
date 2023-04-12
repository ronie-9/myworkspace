import { createReducer, on, Action } from '@ngrx/store';
import * as VoucherActions from './voucher.actions';

export interface VoucherState {
	venues: any[];
	metadata: any;
	voucherData: any;
}

export const initialState: VoucherState = {
	venues: [],
	metadata: {},
	voucherData: {
		voucherAmount: 50,
		currency: "EUR",
		userEmail: "josef@gmail.com",
		purchaseID: "",
		expiresAt: ""
	},
};

export const voucherReducer = createReducer(
	initialState,
	on(VoucherActions.loadVenuesSuccess, (state, { metadata, venues }) => {
		return { ...state, metadata, venues };
	}),
	on(VoucherActions.purchaseVoucherSuccess, (state, { metadata, voucherData }) => {
		return { ...state, metadata, voucherData };
	}),
);

export function reducer(state: VoucherState | undefined, action: Action) {
	return voucherReducer(state, action);
}
