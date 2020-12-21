import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSignUpComponent } from './guest-sign-up.component';

describe('GuestSignUpComponent', () => {
  let component: GuestSignUpComponent;
  let fixture: ComponentFixture<GuestSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
