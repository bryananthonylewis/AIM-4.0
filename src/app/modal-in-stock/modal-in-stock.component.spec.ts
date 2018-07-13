import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInStockComponent } from './modal-in-stock.component';

describe('ModalInStockComponent', () => {
  let component: ModalInStockComponent;
  let fixture: ComponentFixture<ModalInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
