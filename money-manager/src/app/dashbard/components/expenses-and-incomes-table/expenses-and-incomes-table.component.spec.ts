import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAndIncomesTableComponent } from './expenses-and-incomes-table.component';

describe('ExpensesAndIncomesTableComponent', () => {
  let component: ExpensesAndIncomesTableComponent;
  let fixture: ComponentFixture<ExpensesAndIncomesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesAndIncomesTableComponent]
    });
    fixture = TestBed.createComponent(ExpensesAndIncomesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
