import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI9Component } from './form-i9.component';

describe('FormI9Component', () => {
  let component: FormI9Component;
  let fixture: ComponentFixture<FormI9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
