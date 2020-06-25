import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmployeeHandbookComponent } from './form-employee-handbook.component';

describe('FormEmployeeHandbookComponent', () => {
  let component: FormEmployeeHandbookComponent;
  let fixture: ComponentFixture<FormEmployeeHandbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmployeeHandbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmployeeHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
