import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInvoiceOnlyComponent } from './modal-invoice-only.component';

describe('ModalInvoiceOnlyComponent', () => {
  let component: ModalInvoiceOnlyComponent;
  let fixture: ComponentFixture<ModalInvoiceOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInvoiceOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInvoiceOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
