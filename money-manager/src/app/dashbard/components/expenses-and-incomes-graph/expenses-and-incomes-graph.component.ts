import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Observable, map, tap } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Expense } from 'src/app/shared/expense.model';

@Component({
  standalone: true,
  imports: [ChartModule, CommonModule],
  selector: 'app-expenses-and-incomes-graph',
  templateUrl: './expenses-and-incomes-graph.component.html',
  styleUrls: ['./expenses-and-incomes-graph.component.scss'],
})
export class ExpensesAndIncomesGraphComponent implements OnInit {
  transactionsService = inject(TransactionsService);

  data$!: Observable<any>;
  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data$ = this.transactionsService.getExpenses().pipe(
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

    this.options = {
      cutout: '60%',
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: (data: any) => {
              let label = data.dataset.label ?? '';
              if (label) {
                label += ': ';
              }
              if (data.parsed !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(data.parsed);
              }
              return label;
            },
          },
        },
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
          },
        },
      },
    };
  }
}
