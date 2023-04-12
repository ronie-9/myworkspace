import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyVoucherLibComponent } from './myvoucherlib.component';

describe('MyVoucherLibComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MyVoucherLibComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyVoucherLibComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'VoucherApp'`, () => {
    const fixture = TestBed.createComponent(MyVoucherLibComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('VoucherApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyVoucherLibComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('VoucherApp app is running!');
  });
});
