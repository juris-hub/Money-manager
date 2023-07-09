import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAndIncomesGraphComponent } from './expenses-and-incomes-graph.component';

describe('ExpensesAndIncomesGraphComponent', () => {
  let component: ExpensesAndIncomesGraphComponent;
  let fixture: ComponentFixture<ExpensesAndIncomesGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesAndIncomesGraphComponent]
    });
    fixture = TestBed.createComponent(ExpensesAndIncomesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
