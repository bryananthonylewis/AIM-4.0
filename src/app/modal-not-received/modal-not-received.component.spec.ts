import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotReceivedComponent } from './modal-not-received.component';

describe('ModalNotReceivedComponent', () => {
  let component: ModalNotReceivedComponent;
  let fixture: ComponentFixture<ModalNotReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNotReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
