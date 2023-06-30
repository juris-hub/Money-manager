import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ExpensesAndIncomesTableComponent } from '../expenses-and-incomes-table/expenses-and-incomes-table.component';
import { ExpensesAndIncomesGraphComponent } from '../expenses-and-incomes-graph/expenses-and-incomes-graph.component';

@Component({
  standalone: true,
  imports: [
    ButtonModule,
    ExpensesAndIncomesTableComponent,
    ExpensesAndIncomesGraphComponent,
  ],
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  constructor(private router: Router) {}

  OnAddExpense() {
    this.router.navigate(['create-expense']);
  }
}
