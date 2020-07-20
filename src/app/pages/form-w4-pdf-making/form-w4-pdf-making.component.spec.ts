import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormW4PdfMakingComponent } from './form-w4-pdf-making.component';

describe('FormW4PdfMakingComponent', () => {
  let component: FormW4PdfMakingComponent;
  let fixture: ComponentFixture<FormW4PdfMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormW4PdfMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormW4PdfMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
