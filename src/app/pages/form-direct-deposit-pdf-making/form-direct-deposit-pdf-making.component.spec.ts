import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectDepositPdfMakingComponent } from './form-direct-deposit-pdf-making.component';

describe('FormDirectDepositPdfMakingComponent', () => {
  let component: FormDirectDepositPdfMakingComponent;
  let fixture: ComponentFixture<FormDirectDepositPdfMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDirectDepositPdfMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDirectDepositPdfMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
