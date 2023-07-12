import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';

import { Observable, map } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';
import { CommonModule } from '@angular/common';
import { Expense } from 'src/app/shared/expense.model';
import { NoDataFetchedComponent } from 'src/app/shared/no-data-fetched/no-data-fetched.component';
import { ExpensesAndIncomesTableComponent } from './components/expenses-and-incomes-table/expenses-and-incomes-table.component';
import { ExpensesAndIncomesGraphComponent } from './components/expenses-and-incomes-graph/expenses-and-incomes-graph.component';
import { PeriodPickerComponent } from './components/period-picker/period-picker.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    ExpensesAndIncomesTableComponent,
    ExpensesAndIncomesGraphComponent,
    PeriodPickerComponent,
    CommonModule,
    NoDataFetchedComponent,
    RouterModule,
  ],
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent implements OnInit {
  graphData$!: Observable<any>;
  tableData$!: Observable<any>;
  transactionService = inject(TransactionsService);

  constructor() {}

  ngOnInit(): void {
    this.tableData$ = this.transactionService.getExpenses();
    this.graphData$ = this.setGraphData(this.tableData$);
  }

  getGraphData(tabId: string) {
    if (tabId === 'Day') {
      this.tableData$ = this.transactionService.getTodayExpenses();
    }
    if (tabId === 'Week') {
      this.tableData$ = this.transactionService.getWeekExpenses();
    }
    if (tabId === 'Month') {
      this.tableData$ = this.transactionService.getMonthExpenses();
    }

    this.graphData$ = this.setGraphData(this.tableData$);
  }

  setGraphData(graphData$: Observable<Expense[]>) {
    return graphData$!.pipe(
      map((expenses: Expense[]) => {
        const dataByCategory = expenses.reduce((accumulator: any, expense) => {
          const { categories, amount } = expense;

          if (accumulator.hasOwnProperty(categories)) {
            accumulator[categories] += amount;
          } else {
            accumulator[categories] = amount;
          }

          return accumulator;
        }, {});

        const labels = Object.keys(dataByCategory);
        const data = Object.values(dataByCategory);

        return {
          labels: labels,
          datasets: [
            {
              label: 'Cost',
              data: data,
            },
          ],
        };
      })
    );
  }
}
