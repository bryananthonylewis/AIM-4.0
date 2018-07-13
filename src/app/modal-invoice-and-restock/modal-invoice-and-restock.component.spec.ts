import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInvoiceAndRestockComponent } from './modal-invoice-and-restock.component';

describe('ModalInvoiceAndRestockComponent', () => {
  let component: ModalInvoiceAndRestockComponent;
  let fixture: ComponentFixture<ModalInvoiceAndRestockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInvoiceAndRestockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInvoiceAndRestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
