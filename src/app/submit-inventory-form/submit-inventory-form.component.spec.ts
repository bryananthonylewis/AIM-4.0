import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInventoryFormComponent } from './submit-inventory-form.component';

describe('SubmitInventoryFormComponent', () => {
  let component: SubmitInventoryFormComponent;
  let fixture: ComponentFixture<SubmitInventoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitInventoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInventoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
