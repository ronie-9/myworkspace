import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VoucherEffects } from './voucher.effects';

describe('VoucherEffects', () => {
  let actions$: Observable<any>;
  let effects: VoucherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VoucherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VoucherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
