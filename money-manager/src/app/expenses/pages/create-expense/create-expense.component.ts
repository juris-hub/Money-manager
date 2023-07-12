import { Component, inject } from '@angular/core';
import { CreateExpenseFormComponent } from '../../components/create-expense-form/create-expense-form.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CreateExpenseFormComponent, ButtonModule],
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss'],
})
export class CreateExpenseComponent {
  private transactionsService = inject(TransactionsService);
  private router = inject(Router);

  onCreateExpense(expenseValues: Object) {
    this.transactionsService.createAndStoreExpense(expenseValues).subscribe({
      next: () => {
        this.router.navigate(['/expenses']);
      },
    });
  }
}
