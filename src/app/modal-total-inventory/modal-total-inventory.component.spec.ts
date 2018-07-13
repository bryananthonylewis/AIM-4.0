import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTotalInventoryComponent } from './modal-total-inventory.component';

describe('ModalTotalInventoryComponent', () => {
  let component: ModalTotalInventoryComponent;
  let fixture: ComponentFixture<ModalTotalInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTotalInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTotalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
