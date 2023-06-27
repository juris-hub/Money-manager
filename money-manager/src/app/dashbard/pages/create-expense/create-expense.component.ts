import { Component, inject } from '@angular/core';
import { CreateExpenseFormComponent } from '../../components/create-expense-form/create-expense-form.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [CreateExpenseFormComponent, ButtonModule],
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss'],
})
export class CreateExpenseComponent {
  transactionsService = inject(TransactionsService);

  onCreateExpense(event: any) {
    console.log(event);
    this.transactionsService.createAndStoreExpense(event);
  }
}
