import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockSummaryComponent } from './restock-summary.component';

describe('RestockSummaryComponent', () => {
  let component: RestockSummaryComponent;
  let fixture: ComponentFixture<RestockSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestockSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestockSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
