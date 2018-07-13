import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandTopNavComponent } from './brand-top-nav.component';

describe('BrandTopNavComponent', () => {
  let component: BrandTopNavComponent;
  let fixture: ComponentFixture<BrandTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
