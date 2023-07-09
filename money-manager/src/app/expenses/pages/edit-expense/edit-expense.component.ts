import { Component, OnInit, inject } from '@angular/core';
import { CreateExpenseFormComponent } from '../../components/create-expense-form/create-expense-form.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/shared/expense.model';
import { Observable, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CreateExpenseFormComponent, CommonModule],
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss'],
})
export class EditExpenseComponent implements OnInit {
  transactionsService = inject(TransactionsService);
  route = inject(ActivatedRoute);

  formValues$!: Observable<Expense>;

  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getExpense(this.id);
  }

  getExpense(id: string) {
    this.formValues$ = this.transactionsService.getExpense(id).pipe(
      map((response) => {
        return { ...response, date: new Date(response.date.toLocaleString()) };
      })
    );
  }
}
