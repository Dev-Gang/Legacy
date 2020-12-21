import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSinglePostViewComponent } from './guest-single-post-view.component';

describe('GuestSinglePostViewComponent', () => {
  let component: GuestSinglePostViewComponent;
  let fixture: ComponentFixture<GuestSinglePostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSinglePostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSinglePostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
