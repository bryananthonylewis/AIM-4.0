import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSideNavComponent } from './brand-side-nav.component';

describe('BrandSideNavComponent', () => {
  let component: BrandSideNavComponent;
  let fixture: ComponentFixture<BrandSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
