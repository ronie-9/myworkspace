import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { MyVoucherLibRoutingModule } from './myvoucherlib-routing.module';
import { MyVoucherLibComponent } from './myvoucherlib.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { reducers, metaReducers, initialState } from './store';
import { VoucherEffects } from './store/voucher/voucher.effects';
import { UserEffects } from './store/user/user.effects';
import { NotificationComponent } from './components/notification/notification.component';
import { ContainerComponent } from './components/container/container.component';

const imports = [
  BrowserModule,
  MyVoucherLibRoutingModule,
  QRCodeModule,
  HttpClientModule,
  StoreModule.forRoot(reducers, { initialState, metaReducers }),
  EffectsModule.forRoot([VoucherEffects, UserEffects]),
];

if (isDevMode()) {
  imports.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  declarations: [
    MyVoucherLibComponent,
    VoucherComponent,
    NotificationComponent,
    ContainerComponent,
  ],
  imports,
  exports: [
    MyVoucherLibComponent,
    VoucherComponent,
    NotificationComponent,
    ContainerComponent,
    StoreModule,
    EffectsModule,
  ],
  providers: [],
  bootstrap: [MyVoucherLibComponent]
})
export class MyVoucherLibModule { }