import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewFramesComponent } from './modal-new-frames.component';

describe('ModalNewFramesComponent', () => {
  let component: ModalNewFramesComponent;
  let fixture: ComponentFixture<ModalNewFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNewFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
