import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyLocationComponent } from './searchby-location.component';

describe('SearchbyLocationComponent', () => {
  let component: SearchbyLocationComponent;
  let fixture: ComponentFixture<SearchbyLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
