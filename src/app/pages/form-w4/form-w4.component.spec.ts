import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormW4Component } from './form-w4.component';

describe('FormW4Component', () => {
  let component: FormW4Component;
  let fixture: ComponentFixture<FormW4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormW4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormW4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
