import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Expense } from 'src/app/shared/expense.model';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [TableModule, RouterModule, CommonModule, ButtonModule, ToastModule],
  selector: 'app-expenses-and-incomes-table',
  templateUrl: './expenses-and-incomes-table.component.html',
  styleUrls: ['./expenses-and-incomes-table.component.scss'],
  providers: [MessageService],
})
export class ExpensesAndIncomesTableComponent implements OnInit {
  transactionsService = inject(TransactionsService);
  @Input() data!: Expense[];

  columns = [
    { name: 'Amount', prop: 'amount' },
    { name: 'Account', prop: 'account' },
    { name: 'Categories', prop: 'categories' },
    { name: 'Date', prop: 'date' },
    { name: 'Comment', prop: 'comment' },
  ];

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {}

  onDeleteExpense(id: string) {
    this.transactionsService.deleteExpense(id).subscribe({
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'You expense has been deleted !',
        });
      },
      error: (err: any) => {
        this.messageService.add({
          severity: 'error',
          summary: err.error.error,
          detail: err.message,
        });
      },
    });
  }
}
