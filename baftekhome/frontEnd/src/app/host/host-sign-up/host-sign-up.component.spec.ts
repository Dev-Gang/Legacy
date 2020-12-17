import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSignUpComponent } from './host-sign-up.component';

describe('HostSignUpComponent', () => {
  let component: HostSignUpComponent;
  let fixture: ComponentFixture<HostSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
