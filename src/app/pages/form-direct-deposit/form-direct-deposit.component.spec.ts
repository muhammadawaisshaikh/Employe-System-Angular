import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectDepositComponent } from './form-direct-deposit.component';

describe('FormDirectDepositComponent', () => {
  let component: FormDirectDepositComponent;
  let fixture: ComponentFixture<FormDirectDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDirectDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDirectDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
