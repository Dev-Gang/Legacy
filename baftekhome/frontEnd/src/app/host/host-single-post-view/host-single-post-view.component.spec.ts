import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSinglePostViewComponent } from './host-single-post-view.component';

describe('HostSinglePostViewComponent', () => {
  let component: HostSinglePostViewComponent;
  let fixture: ComponentFixture<HostSinglePostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostSinglePostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSinglePostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
