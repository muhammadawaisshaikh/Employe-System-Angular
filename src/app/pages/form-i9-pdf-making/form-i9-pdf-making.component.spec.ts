import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI9PdfMakingComponent } from './form-i9-pdf-making.component';

describe('FormI9PdfMakingComponent', () => {
  let component: FormI9PdfMakingComponent;
  let fixture: ComponentFixture<FormI9PdfMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI9PdfMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI9PdfMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
