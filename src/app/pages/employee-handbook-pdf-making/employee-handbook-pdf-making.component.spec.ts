import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHandbookPdfMakingComponent } from './employee-handbook-pdf-making.component';

describe('EmployeeHandbookPdfMakingComponent', () => {
  let component: EmployeeHandbookPdfMakingComponent;
  let fixture: ComponentFixture<EmployeeHandbookPdfMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHandbookPdfMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHandbookPdfMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
