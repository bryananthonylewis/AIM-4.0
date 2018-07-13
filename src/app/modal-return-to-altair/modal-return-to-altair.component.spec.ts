import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReturnToAltairComponent } from './modal-return-to-altair.component';

describe('ModalReturnToAltairComponent', () => {
  let component: ModalReturnToAltairComponent;
  let fixture: ComponentFixture<ModalReturnToAltairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReturnToAltairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReturnToAltairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
