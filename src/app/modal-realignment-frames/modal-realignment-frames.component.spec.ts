import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRealignmentFramesComponent } from './modal-realignment-frames.component';

describe('ModalRealignmentFramesComponent', () => {
  let component: ModalRealignmentFramesComponent;
  let fixture: ComponentFixture<ModalRealignmentFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRealignmentFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRealignmentFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
