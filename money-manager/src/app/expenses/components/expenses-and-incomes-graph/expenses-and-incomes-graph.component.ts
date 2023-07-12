import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Expense } from 'src/app/shared/models/expense.model';

@Component({
  standalone: true,
  imports: [ChartModule, CommonModule],
  selector: 'app-expenses-and-incomes-graph',
  templateUrl: './expenses-and-incomes-graph.component.html',
  styleUrls: ['./expenses-and-incomes-graph.component.scss'],
})
export class ExpensesAndIncomesGraphComponent implements OnInit {
  transactionsService = inject(TransactionsService);

  @Input() data!: Expense[];

  options: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

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
