import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameReviewComponent } from './frame-review.component';

describe('FrameReviewComponent', () => {
  let component: FrameReviewComponent;
  let fixture: ComponentFixture<FrameReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
