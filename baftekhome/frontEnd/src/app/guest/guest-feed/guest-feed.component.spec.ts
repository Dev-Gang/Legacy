import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFeedComponent } from './guest-feed.component';

describe('GuestFeedComponent', () => {
  let component: GuestFeedComponent;
  let fixture: ComponentFixture<GuestFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
